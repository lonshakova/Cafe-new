<template>
  <v-app>
    <div class="bar">
      <SideMenu />
      <v-container class="btn-box">
        <v-row justify="space-around" class="header-menu">
          <NewProduct />
          <NewPerson />
          <TotalAmount />
        </v-row>
      </v-container>
    </div>
    <v-main>
      <card-list />
    </v-main>
  </v-app>
</template>

<script setup>
import CardList from "../components/CardList.vue";
import NewPerson from "../components/NewPerson.vue";
import NewProduct from "../components/NewProduct.vue";
import TotalAmount from "../components/TotalAmount.vue";
import SideMenu from "../components/SideMenu.vue";

</script>

<style scoped lang="scss">
.bar {
  margin: 20px;
  display: flex;
}

.btn-box {
  width: 100%;
  height: 90px;
}
</style>
