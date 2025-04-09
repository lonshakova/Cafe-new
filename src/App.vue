<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useUsersStore } from './stores/usersStore';

const usersStore = useUsersStore();

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
