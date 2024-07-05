import { defineStore } from "pinia";
import axios from "axios";
import { useUserStore } from "~/store/user";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: null,
    token: useCookie("token").value || null,
  }),
  actions: {
    async fetchCart() {
      try {
        const userStore = useUserStore();
        if (!userStore.user) {
          await userStore.fetchUser();
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    },
    setToken(token: any) {
      this.token = token;
    },
  },
});
