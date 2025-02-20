import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import MainPage from "../pages/MainPage.vue";
import RegistrationPage from "../pages/RegistrationPage.vue";
const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/login',
    component: LoginPage
  }, 
  {
    path: '/:id',
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