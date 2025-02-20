import { createWebHistory, createRouter } from "vue-router";
import StartPage from "../pages/StartPage.vue";
import MainPage from "../pages/MainPage.vue";
import RegistrationPage from "../pages/RegistrationPage.vue";
const routes = [
  {
    path: '/',
    component: StartPage
  },
  {
    path: '/main',
    component: MainPage
  }, 
  {
    path: '/main/:id',
    component: MainPage
  },
  {
    path: '/registration',
    component: RegistrationPage
  }, 
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;