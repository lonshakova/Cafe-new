<template>
  <v-dialog v-model="isVisible" width="auto" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="main-btn">Добавить продукт</v-btn>
    </template>
    <v-card>
      <div class="new-product">
        <v-form class="input-product">
          <v-text-field
            variant="plain"
            v-model="product.name"
            density="comfortable"
            class="input"
            placeholder="Введите название"
          />
          <v-text-field
            variant="plain"
            type="number"
            density="comfortable"
            v-model="product.cost"
            class="input"
            placeholder="Введите цену"
          />
        </v-form>
        <div class="users">
          <div>
            <div class="question">Кто платил?</div>
            <v-radio-group v-model="product.payer">
              <div
                v-for="person in personsStore.persons"
                :key="person.id"
                :value="person"
              >
                <v-radio :label="person.name" :value="person" class="payer" />
              </div>
            </v-radio-group>
          </div>
          <div>
            <div class="question">Кто ел/пил?</div>
            <div
              v-for="person in personsStore.persons"
              :key="person.id"
              :value="person"
            >
              <v-checkbox
                :label="person.name"
                :value="person"
                class="payer"
                v-model="product.eaters"
              />
            </div>
          </div>
        </div>
        <div style="display: flex; justify-content: flex-end">
          <v-btn
            text="Добавить"
            class="btn"
            @click="createCard"
            :disabled="formIsEmpty"
          />
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { usePersonsStore } from "../stores/personsStore";
import { useProductsStore } from "../stores/productStore";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const personsStore = usePersonsStore();
const productStore = useProductsStore();

let isVisible = ref(false);
let product = ref({
  name: "",
  cost: "",
  payer: "",
  eaters: [],
});

let formIsEmpty = computed(() => {
  return (
    product.value.name === "" ||
    product.value.cost === "" ||
    product.value.payer === "" ||
    product.value.eaters.length === 0
  );
});

function createCard() {
  product.value.id = Date.now();
  if (route.params.id){
    product.value.checkId = route.params.id;
  }
  productStore.createCard(product.value);
  product.value = {
    name: "",
    cost: "",
    payer: "",
    eaters: [],
  };
}
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

.new-product {
  width: 785px;
  background-color: #eafaf1;
}

.input-product {
  margin: 20px 0px;
  padding: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}

.input {
  margin: 0px 10px;
  padding-left: 10px;
  width: 100px;
  background: #ffffff;
  max-height: 50px;
  border-radius: 15px;
  border: 1px solid #148f77;
}

.btn {
  margin: 20px;
  width: 140px;
  height: 50px;
  background: #ffffff;
  &:hover {
    background: #148f77;
    color: #ffffff;
  }
}

.users {
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  color: black;
}

.question {
  font-size: 24px;
  text-align: center;
}

.payer {
  height: 50px;
  width: 150px;
  border: 1px solid #148f77;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  text-transform: uppercase;
  color: black;
}
</style>
