<template>
  <v-dialog v-model="isVisible" width="auto" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="main-btn">Итоговая сумма</v-btn>
    </template>
    <v-card>
      <div class="total-amount">
        <div class="amount">
          СУММА: <span style="color: #186a3b">{{ amount }}</span>
        </div>
        <v-list-item v-for="person in personsStore.persons" :key="person.id">
          <v-list-item v-for="creditor in person.creditors" :key="creditor.id">
            <div class="persons">
              {{ person.name }} должен {{ creditor.nameCreditor }}
              {{ creditor.credit }}
            </div>
          </v-list-item>
        </v-list-item>
        <v-btn
          text="Убрать повторения"
          @click="personsStore.removeRepetitions()"
          class="btn"
        />
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { usePersonsStore } from "../stores/personsStore";
import { ref, computed } from "vue";

const personsStore = usePersonsStore();

let isVisible = ref(false);
let amount = computed(() => {
  return personsStore.persons.reduce(
    (sum, person) => sum + person.wastes,
    0
  );
});
</script>

<style scoped lang="scss">
.main-btn {
  width: 15vw;
  min-height: 70px;
  font-weight: 500;
  font-size: 1vw;
  border: 1px #148f77 solid;
  border-radius: 15px;
  &:hover {
    background: #eafaf1;
  }
}

.total-amount {
  min-width: 20vw;
  min-height: 20vh;
  padding: 10px;
  text-align: center;
  background: #eafaf1;
}

.amount {
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
}

.persons {
  min-width: 250px;
  height: 50px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border: 1px solid #148f77;
  border-radius: 15px;
}

.btn:hover {
  background: #148f77;
  color: #ffffff;
}
</style>
