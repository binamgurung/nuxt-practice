// stores/user.ts
import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: useCookie("user_details").value || null,
    token: useCookie("token").value || null,
  }),
  actions: {
    async fetchUser() {
      try {
        if (this.token == null) {
          return navigateTo("/login");
        }
        const response = await axios.get("https://dummyjson.com/user/me", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        // const token = useCookie("token");
        this.user = response.data;
        return response.data;
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    },
    setToken(token: any) {
      this.token = token;
    },
    getUserDetails() {
      return this.user;
    },
  },
});
