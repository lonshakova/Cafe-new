<template>
  <div>
    <v-dialog v-model="isVisible" width="auto" scrollable>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-plus" variant="text" v-bind="props" />
      </template>
      <v-card class="main-window">
        <v-card-title>Добавить новый чек</v-card-title>
        <v-form class="input-name">
          <v-text-field
            variant="plain"
            v-model="check.name"
            density="comfortable"
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProductsStore } from "../stores/productStore";

const productStore = useProductsStore();

const isVisible = ref(false);
const check = ref({ name: "", id: null, products: [], persons: [] });

function addnewCheck() {
  check.value.id = Date.now();
  productStore.checks.push(check.value);
  check.value = { name: "", id: null, products: [], persons: [] };
  isVisible.value = false
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
  margin: 10px;
  padding-left: 10px;
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
