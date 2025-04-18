import { defineStore } from "pinia";
import { useProductsStore } from "./productStore";

export const usePersonsStore = defineStore({
  id: "persons",
  state: () => ({ persons: [] }),
  actions: {
    addPerson(person) {
      const productStore = useProductsStore();
      this.persons.push(person);
      if (person.checkId !== 0) {
        let check = productStore.checks.find((ch) => ch.id == person.checkId);
        check.persons.push(person.id);
      }
    },

    deletePerson(person) {
      const productStore = useProductsStore();
      this.persons = this.persons.filter((p) => p.id !== person.id);
      if (person.checkId !== 0) {
        let check = productStore.checks.find((ch) => ch.id == person.checkId);
        check.persons = check.persons.filter((p) => p !== person.id);
      }
    },

    removeRepetitions() {
      for (const person1 of this.persons) {
        for (const person2 of this.persons) {
          const cred1 = person1.creditors.find(
            (cred1) => cred1.id === person2.id
          );
          const cred2 = person2.creditors.find(
            (cred2) => cred2.id === person1.id
          );
          if (cred1 && cred2) {
            if (cred1.credit > cred2.credit) {
              cred1.credit = cred1.credit - cred2.credit;
              person2.creditors = person2.creditors.filter(
                (p) => p.id !== cred2.id
              );
            } else {
              cred2.credit = cred2.credit - cred1.credit;
              person1.creditors = person1.creditors.filter(
                (p) => p.id !== cred1.id
              );
            }
          }
        }
      }
    },
  },
});
