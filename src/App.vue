<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script setup>
import { onBeforeMount, onMounted } from 'vue';
import { useUsersStore } from './stores/usersStore';
import { useRoute } from 'vue-router';

const usersStore = useUsersStore();
const route = useRoute();

onBeforeMount(()=>{
  const userToken = window.localStorage.getItem("userToken");
  if(userToken){
    usersStore.isEntered = true;
    const token = usersStore.parseJwt(userToken)
    usersStore.idUser=token.id;
    usersStore.getUserChecks();
  }
})
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  padding: 0px;
}
</style>
