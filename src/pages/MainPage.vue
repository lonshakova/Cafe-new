<template>
  <v-app>
    <v-main>
      <v-container class="btn-box">
        <v-row
          justify="space-around"
          class="header-menu">
          <v-dialog
            v-model="NewProductVisible"
            width="auto"
            scrollable>
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                class="btn"
                >Добавить продукт</v-btn
              >
            </template>
            <v-card>
              <new-product />
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="NewPersonVisible"
            width="auto"
            backgroung-color="#eafaf1"
            height="500px"
            scrollable>
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                class="btn"
                >Добавить человека</v-btn
              >
            </template>
            <v-card>
                <new-person />
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="TotalAmountVisible"
            width="auto"
            scrollable>
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                class="btn"
                >Итоговая сумма</v-btn
              >
            </template>
            <v-card>
              <total-amount />
            </v-card>
          </v-dialog>
        </v-row>
      </v-container>
      <card-list />
    </v-main>
  </v-app>
</template>

<script>
  import CardList from "../components/CardList.vue";
  import NewPerson from "../components/NewPerson.vue";
  import NewProduct from "../components/NewProduct.vue";
  import TotalAmount from "../components/TotalAmount.vue";
  export default {
    components: {
      NewPerson,
      NewProduct,
      TotalAmount,
      CardList,
    },
    data() {
      return {
        NewProductVisible: false,
        NewPersonVisible: false,
        TotalAmountVisible: false,
      };
    },
  };
</script>

<style scoped lang="scss">
.btn-box{
  width: 100%;
  height: 90px;
}

.btn {
  width: 300px;
  min-height: 70px;
  font-weight: 600;
  font-size: 17px;
  border: 1px #148F77 solid;
  border-radius: 15px;
  &:hover {
    background: #eafaf1;
  }
}
</style>
