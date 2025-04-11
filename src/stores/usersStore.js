import { defineStore } from "pinia";
import { useProductsStore } from "./productStore";

export const useUsersStore = defineStore({
  id: "users",
  state: () => ({
    isEntered: false,
    idUser: null,
    checks: [],
  }),
  actions: {
    parseJwt(token) {
      if (!token) {
        return null;
      }
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const padding = "=".repeat((4 - (base64.length % 4)) % 4);
      const base64WithPadding = base64 + padding;
      const decodedString = window.atob(base64WithPadding);
      const decodedBytes = new TextDecoder("utf-8").decode(
        new Uint8Array([...decodedString].map((char) => char.charCodeAt(0)))
      );
      return JSON.parse(decodedBytes);
    },

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
          this.idUser = data.user.id;
          this.getUserChecks();
          this.router.push("/");
        })
        .catch((error) => {
          console.error("Ошибка авторизации:", error);
        });
    },

    async registUser(user) {
      fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.login,
          email: user.login,
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
          this.idUser = data.user.id;
          this.router.push("/");
        })
        .catch((error) => {
          console.error("Ошибка регистрации:", error);
        });
    },

    goOut() {
      this.isEntered = false;
      this.idUser = null;
      window.localStorage.removeItem("userToken");
      this.checks = [];
      this.router.push("/");
    },

    async getUserChecks() {
      fetch(`http://localhost:1337/api/users/${this.idUser}?populate=checks`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          this.checks = data.checks;
        })
        .catch((error) => {
          console.error("Ошибка загрузки чеков:", error);
        });
    },

    async addCheck(check) {
      const stringId = String(this.idUser);
      fetch("http://localhost:1337/api/checks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: check.name,
            products: check.products,
            persons: check.persons,
            user_id: stringId,
          },
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Ошибка добавления чека:", error);
        });
    },
  },
});
