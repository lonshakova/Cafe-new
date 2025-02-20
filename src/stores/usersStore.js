import { defineStore } from "pinia";
import { useProductsStore } from "./productStore";

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    isEntered: false,
    enteredUser: {
      id: null,
      login: "",
      password: "",
    },
    users: [
      {
        id: 5664,
        login: "donat.b@boris.com",
        password: "12345678",
      },
      {
        id: 4553,
        login: "irish_kish@kish.ru",
        password: "11111111",
      },
      {
        id: 3442,
        login: "nepishi@ire.com",
        password: "22222222",
      },
    ],
  }),
  actions: {
    enterUser(user) {
      for (let us of this.users) {
        if (user.login === us.login && user.password === us.password) {
          this.enteredUser = us;
          this.isEntered = true;
          this.router.push("/");
        }
      }
    },

    goOut(){
      this.isEntered = false;
      this.enteredUser = {
        id: null,
        login: "",
        password: "",
      }
      this.router.push("/");
    }
  },
});
