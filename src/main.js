import { createApp } from 'vue'
import App from './App.vue'

//Pinia
import { createPinia } from "pinia";
import { markRaw } from "vue";
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
//Vue-Router
import router from "./router/router";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'




const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

createApp(App).use(router).use(vuetify).use(pinia).mount('#app')