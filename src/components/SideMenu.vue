<template>
  <div>
    <v-app-bar-nav-icon
      variant="text"
      class="icon"
      @click.stop="isVisible = !isVisible"
    />
    <v-navigation-drawer v-model="isVisible" class="side-menu">
      <div class="top">
        <v-app-bar-nav-icon
        variant="text"
        @click.stop="isVisible = !isVisible"
      />
      <NewCheck />
      <GoOut />
      </div>
      <v-list class="checks">
        <v-list-item
          v-for="check in productStore.checks"
          :value="check"
          :key="check.id"
          class="check"
          color="#148F77"
        >
          <template v-slot:append>
            <v-icon icon="mdi-close" @click="deleteItem(check.id)" />
          </template>
          {{ check.name }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import GoOut from "../components/GoOut.vue";
import NewCheck from "./NewCheck.vue";
import { useProductsStore } from "../stores/productStore";

const productStore = useProductsStore();

let isVisible = ref(false);

function deleteItem(id) {
  productStore.checks = productStore.checks.filter((p) => p.id !== id);
}


</script>

<style lang="scss" scoped>
.side-menu {
  padding: 31px 10px;
  background-color: #1abc9c;

}

.icon {
  margin: 10px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: center;
}

.check {
  margin: 10px;
  height: 7vh;
  border-radius: 15px;
  font-weight: 600;
  font-size: 17px;
  background-color: #ffffff;
}
</style>
