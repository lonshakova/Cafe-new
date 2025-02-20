<template>
  <v-dialog v-model="isVisible" width="auto" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" variant="tonal">Выход</v-btn>
    </template>
    <v-card>
      <div class="main-window">
        <div class="text">Подтвердите выход</div>
        <div class="btns">
          <v-btn class="btn"  @click="isVisible=false">Остаться</v-btn>
          <v-btn class="btn" @click="usersStore.goOut()">Выход</v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useUsersStore } from '../stores/usersStore';

const usersStore = useUsersStore();

let isVisible = ref(false);
</script>

<style lang="scss" scoped>
.main-window {
  padding: 10px;
  width: 20vw;
  height: 20vh;
  background-color: #eafaf1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.text {
  font-size: xx-large;
}

.btns {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.btn {
  margin: 0px;
  width: 105px;
  min-height: 50px;
  font-weight: 600;
  border: 1px solid #148f77;
  &:hover {
    background: #148f77;
    color: #eafaf1;
  }
}
</style>
