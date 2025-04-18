<template>
  <v-dialog v-model="isVisible" width="auto" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn
        v-if="btnType == 'add'"
        icon="mdi-plus"
        variant="text"
        v-bind="props"
      />
      <v-btn v-if="btnType == 'save'" variant="flat" v-bind="props">Сохранить чек</v-btn>
    </template>
    <v-card class="main-window">
      <v-card-title>Добавить новый чек</v-card-title>
      <v-form class="input-name">
        <v-text-field
          variant="solo"
          flat
          v-model="check.name"
          density="comfortable"
          :rounded="true"
          class="input"
          placeholder="Введите название"
        />
      </v-form>
      <div class="btns">
        <v-btn class="btn" @click="isVisible = false">Отмена</v-btn>
        <v-btn class="btn" @click="addnewCheck()">Добавить чек</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useProductsStore } from "../stores/productStore";
import { useUsersStore } from "../stores/usersStore";
import { usePersonsStore } from "../stores/personsStore";
import { useRouter } from "vue-router";
import { defineProps } from "vue";

const productStore = useProductsStore();
const usersStore = useUsersStore();
const router = useRouter();
const personsStore = usePersonsStore();

const isVisible = ref(false);
const check = ref({ name: "", id: null, products: [], persons: [] });

const props = defineProps({
  btnType: { type: String, required: true },
});

function addnewCheck() {
  if (props.btnType == "save") {
    for (let product of productStore.products) {
      if (product.checkId == 0) {
        check.products.push(product.id);
        product.checkId = check.value.id;
      }
    }
    for (let person of personsStore.persons) {
      if (person.checkId == 0) {
        check.persons.push(person.id);
        person.checkId = check.value.id;
      }
    }
  }
  usersStore.checks.push(check.value);
  usersStore.addCheck(check.value);
  check.value = { name: "", id: null, products: [], persons: [] };
  isVisible.value = false;
}
</script>

<style lang="scss" scoped>
.main-window {
  padding: 10px;
  min-width: 20vw;
  height: 20vh;
  background-color: #eafaf1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.input {
  margin: 10px 0px;
  min-width: 18vw;
  background: #ffffff;
  max-height: 50px;
  border-radius: 15px;
  border: 1px solid #148f77;
}

.btns {
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 10px;
}

.btn {
  margin: 0px;
  min-width: 105px;
  min-height: 50px;
  font-weight: 600;
  border: 1px solid #148f77;
  &:hover {
    background: #148f77;
    color: #eafaf1;
  }
}
</style>
