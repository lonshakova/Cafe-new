<template>
  <div class="start-page" justify-center>
    <v-form class="enter-form">
      <v-text-field
        class="login"
        label="Логин"
        type="text"
        required
        v-model="login"
      />
      <v-text-field
        class="password"
        label="Пароль"
        required
        v-model="password"
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
import { useRouter } from 'vue-router';

const router = useRouter();

let isVisible = ref(false);
let login = ref("");
let password = ref("");


function enterUser() {
  if (password.value && login.value) {
    router.push('/main');
  }
}
</script>

<style scoped lang="scss">
.start-page {
  width: 100%;
  height: 100%;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn:hover {
  background: #eafaf1;
}

.enter-form {
  margin: 10px;
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
