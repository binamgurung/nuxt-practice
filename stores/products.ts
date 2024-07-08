import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

export const useProductsStore = defineStore("products", {
  state: () => ({
    user: useCookie("user_details").value || null,
    token: useCookie("token").value || null,
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get("https://dummyjson.com/products/");
        return response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});
