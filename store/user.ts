// stores/user.js
import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    token: useCookie("token").value || null,
  }),
  actions: {
    async fetchUser() {
      try {
        const response = await axios.get("https://dummyjson.com/user/me", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        const token = useCookie("token");
        this.user = response.data;
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    },
    setToken(token: any) {
      this.token = token;
    },
  },
});
