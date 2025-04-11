<template>
  <div class="card-list">
    <transition-group
      name="card-list"
      v-for="product in productList"
      :key="product.id"
    >
      <card-product :product="product" :key="product.id" />
    </transition-group>
  </div>
</template>

<script setup>
import CardProduct from "./CardProduct.vue";
import { useProductsStore } from "../stores/productStore";
import { useUsersStore } from "../stores/usersStore";
import { computed } from "vue";
import { useRoute } from "vue-router";

const productStore = useProductsStore();
const usersStore = useUsersStore()
const route = useRoute();

const productList = computed(() => {
  let prods = [];
  if (!route.params.id) {
    return productStore.products.filter((p) => p.checkId == 0);
  }
  const check = usersStore.checks.find((ch) => ch.id == route.params.id);
  for (let prodId of check.products) {
    prods.push(productStore.products.find((p) => p.id == prodId));
  }
  return prods;
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
