<template>
  <div class="card-list">
    <transition-group
      name="card-list"
      v-for="product in check.products"
      :key="product.id"
      v-if="check"
    >
      <card-product :product="product" :key="product.id" />
    </transition-group>
    {{ check }}
  </div>
</template>

<script setup>
import CardProduct from "./CardProduct.vue";
import { useProductsStore } from "../stores/productStore";
import { useUsersStore } from "../stores/usersStore";
import { computed, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const productStore = useProductsStore();
const usersStore = useUsersStore();
const route = useRoute();

let check = computed(() =>
  usersStore.checks.find((ch) => ch.id == route.params.id)
);

const productList = computed(() => {
  console.log(check);
  if (!route.params.id) {
    //return productStore.products.filter((p) => p.checkId == 0);
    return [];
  }
  return check.value.products;
});

onBeforeMount(() => {
  //check.value = usersStore.checks.find((ch) => ch.id == route.params.id);
});
</script>

<style scoped>
.card-list {
  min-width: 1020px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card-list-item {
  display: inline-block;
  margin-right: 10px;
}

.card-list-enter-active,
.card-list-leave-active {
  transition: all 0.5s ease;
}

.card-list-enter-from,
.card-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.card-list-move {
  transition: transform 0.8s ease;
}

.empty-list {
  width: 100%;
  display: flex;
  justify-content: center;
  color: #148f77;
}
</style>
