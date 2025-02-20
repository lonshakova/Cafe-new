<template>
  <div class="start-page" justify-center>
    <div class="logo" @click="$router.push('/')" title="Перейти на главную">
      deli / check
    </div>
    <v-form class="enter-form">
      <v-text-field
        class="login"
        label="Логин"
        type="text"
        required
        v-model="user.login"
      />
      <v-text-field
        class="password"
        label="Пароль"
        required
        v-model="user.password"
        :type="isVisible ? 'text' : 'password'"
        :append-inner-icon="isVisible ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append-inner="isVisible = !isVisible"
      />
      <div class="btns">
        <v-btn
          class="btn"
          variant="text"
          rounded="xl"
          @click="$router.push('/registration')"
          >Регистрация</v-btn
        >
        <v-btn class="btn" variant="text" rounded="xl" @click="enterUser()"
          >Вход</v-btn
        >
      </div>
    </v-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUsersStore } from "../stores/usersStore";

const usersStore = useUsersStore();

const user = ref({
  login: null,
  password: null,
})
let isVisible = ref(false);

function enterUser() {
  if (user.value.password && user.value.login) {
    usersStore.enterUser(user.value);
  }
}
</script>

<style scoped lang="scss">
.start-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  font-size: 10vh;
  font-weight: 700;
  color: #148f77;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
}

.btn:hover {
  background: #eafaf1;
}

.enter-form {
  justify-self: center;
  width: 20vw;
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.btn {
  margin-left: 10px;
}
</style>
