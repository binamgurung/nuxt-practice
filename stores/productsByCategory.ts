import { defineStore } from "pinia";
import axios from "axios";

export const useProductsByCategoryStore = defineStore("productsByCategory", {
  state: () => ({
    user: useCookie("user_details").value || null,
    token: useCookie("token").value || null,
  }),
  actions: {
    async fetchCategoryProducts(data: any) {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/" + data
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});