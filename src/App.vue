<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<script>
  import MainPage from './pages/MainPage.vue';
  export default {
       components: {
           MainPage
       }
   };
</script>

<style lang=scss>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  padding: 20px;
}
</style>