import { defineStore } from "pinia";
import axios from "axios";
import { useCookie } from "nuxt/app"; // Adjust the import path if needed

interface UserPayloadInterface {
  username: string;
  password: string;
}

interface UserResponse {
  token: string;
  // Add other user properties if needed
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      this.loading = true;
      try {
        const { data } = await axios.post<UserResponse>(
          "https://dummyjson.com/auth/login",
          {
            username,
            password,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        const token = useCookie("token");
        token.value = data.token; // set token to cookie
        this.authenticated = true; // set authenticated state value to true
      } catch (error) {
        console.error("Authentication failed:", error);
      } finally {
        this.loading = false;
      }
    },
    logUserOut() {
      const token = useCookie("token");
      this.authenticated = false; // set authenticated state value to false
      token.value = null;
    },
  },
});
