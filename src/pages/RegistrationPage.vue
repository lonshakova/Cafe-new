<template>
  <div class="reg-page">
    <v-form class="reg-form">
      <v-text-field
        class="login"
        label="Логин"
        type="text"
        v-model="login"
        :rules="[rules.required]"
      />
      <v-text-field
        class="password"
        label="Пароль"
        hint="At least 8 characters"
        :rules="[rules.required, rules.min]"
        :type="isVisible ? 'text' : 'password'"
        :append-inner-icon="isVisible ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append-inner="isVisible = !isVisible"
        v-model="password"
      />
      <v-text-field
        class="password"
        label="Повторите пароль"
        :rules="[rules.required, rules.min, rules.repeatMatch]"
        :type="isVisibleRep ? 'text' : 'password'"
        :append-inner-icon="isVisibleRep ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append-inner="isVisibleRep = !isVisibleRep"
        v-model="repPassword"
      />
      <div class="btns">
        <v-btn
          class="btn"
          variant="text"
          rounded="xl"
          @click="$router.push('/')"
          >Назад</v-btn
        >
        <v-btn
          class="btn"
          variant="text"
          rounded="xl"
          @click="registUser()"
          >Регистрация</v-btn
        >
      </div>
    </v-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

let rules = ref({
  required: (value) => !!value || "Обязательно для заполнения",
  min: (v) => v.length >= 8 || "Минимум 8 символов",
  repeatMatch: () =>
    !!(password.value == repPassword.value) || "Пароли не совпадают",
});
let isVisible = ref(false);
let isVisibleRep = ref(false);
let login = ref("");
let password = ref("");
let repPassword = ref("");

function registUser() {
  if (password.value && login.value && repPassword.value == password.value) {
    router.push('/main');
  }
}
</script>

<style lang="scss" scoped>
.reg-page {
  width: 100%;
  height: 100%;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reg-form {
  margin: 10px;
  width: 20vw;
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.btn {
  align-self: flex-end;
  justify-content: flex-end;
}

.btn:hover {
  background: #eafaf1;
}
</style>
