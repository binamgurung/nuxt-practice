import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({
    user: useCookie("user_details").value || null,
    token: useCookie("token").value || null,
  }),
  actions: {
    async fetchCategories() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        return response.data.slice(0, 8);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});
