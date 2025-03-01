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
        <GoOut v-if="usersStore.isEntered" />
        <v-btn v-else class="btn" @click="$router.push('/login')" variant="flat"
          >Вход</v-btn
        >
      </div>
      <div v-if="!usersStore.isEntered" class="warning">Войдите, чтобы добавить или сохранить чек</div>
      <v-list class="checks">
        <v-list-item
          v-for="check in productStore.checks"
          :value="check"
          :key="check.id"
          class="check"
          color="#148F77"
          @click="$router.push(`/${check.id}`)"
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
import { useUsersStore } from "../stores/usersStore";

const productStore = useProductsStore();
const usersStore = useUsersStore();

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

.btn {
  border: 1px #148f77 solid;
  border-radius: 10px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: center;
}

.warning{
  font-size: x-large;
  font-weight: 700;
  text-align: center;
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
