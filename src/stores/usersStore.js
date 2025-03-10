import { defineStore } from "pinia";
import { useProductsStore } from "./productStore";

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    isEntered: false,
    enteredUser: {
      id: null,
      login: "",
      password: "",
    },
    users: [
      {
        id: 5664,
        login: "donat.b@boris.com",
        password: "12345678",
      },
      {
        id: 4553,
        login: "irish_kish@kish.ru",
        password: "11111111",
      },
      {
        id: 3442,
        login: "nepishi@ire.com",
        password: "22222222",
      },
    ],
  }),
  actions: {
    async enterUser(user) {
      fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: user.login,
          password: user.password,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          this.isEntered = true;
          window.localStorage.setItem("userToken", data.jwt);
          this.enteredUser = data.user;
          this.router.push("/");
        })
        .catch((error) => {
          console.error("Ошибка авторизации:", error);
        });
    },

    goOut() {
      this.isEntered = false;
      this.enteredUser = {
        id: null,
        login: "",
        password: "",
      };
      this.router.push("/");
    },
  },
});
