<template>
  <div>
    <div class="card-list">
      <transition-group 
      name="card-list" 
      v-for="product in productStore.products" 
      :key="product.id">
        <card-product :product="product" :key="product.id" />
      </transition-group>
    </div>
  </div>
</template>
  
<script>
import CardProduct from "./CardProduct.vue";
import { useProductsStore } from "../stores/productStore";
export default {
  setup() {
    const productStore = useProductsStore();
    return {
      productStore
    }
  },
  components: {
    CardProduct,
  },
};
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