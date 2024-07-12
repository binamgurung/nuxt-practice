import { defineStore } from "pinia";
import axios from "axios";

const state = {
  products: [],
  loading_value: false as boolean,
};
export const useProductsStore = defineStore("products", {
  state: () => state,
  getters: {
    loading_products: (state) => state.loading_value,
  },
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get("https://dummyjson.com/products/");
        // console.log(response);
        this.products = response.data.products;
        console.log(this.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});
