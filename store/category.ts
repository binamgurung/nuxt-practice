// stores/user.ts
import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    user: useCookie("user_details").value || null,
    token: useCookie("token").value || null,
  }),
  actions: {
    async fetchCategoryProducts(data: any) {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/" + data,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
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
