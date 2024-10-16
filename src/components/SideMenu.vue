<template>
  <div>
    <v-app-bar-nav-icon
      variant="title"
      class="icon"
      @click.stop="isVisible = !isVisible"
    ></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="isVisible" class="side-menu">
      <v-app-bar-nav-icon
        variant="title"
        @click.stop="isVisible = !isVisible"
      ></v-app-bar-nav-icon>
      <v-btn icon="mdi-plus" variant="title" />
      <v-dialog v-model="GoOutVisible" width="auto" scrollable>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" variant="tonal">Выход</v-btn>
        </template>
        <v-card>
          <GoOut />
        </v-card>
      </v-dialog>
      <v-list class="checks">
        <v-list-item
          v-for="check in checks"
          :value="check"
          :key="check.id"
          class="check"
          color="#148F77"
        >
          <template v-slot:append>
            <v-icon icon="mdi-close" @click="deleteItem(check.id)" />
          </template>
          {{ check.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import GoOut from "../components/GoOut.vue";

let GoOutVisible = ref(false);
let isVisible = ref(false);
let checks = ref([
  { title: "My Files", id: 1 },
  { title: "Shared with me", id: 2 },
  { title: "Starred", id: 3 },
  { title: "Recent", id: 4 },
  { title: "Offline", id: 5 },
  { title: "Uploads", id: 6 },
  { title: "Backups", id: 7 },
]);

function deleteItem(id) {
  checks.value = checks.value.filter((p) => p.id !== i);
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

.check {
  margin: 10px;
  height: 7vh;
  border-radius: 15px;
  font-weight: 600;
  font-size: 17px;
  background-color: #ffffff;
}
</style>
