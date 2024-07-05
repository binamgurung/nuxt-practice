import { defineStore } from "pinia";
import axios from "axios";
import { useCookie } from "nuxt/app"; // Adjust the import path if needed

interface UserDetails {
  username: string;
  password: string;
}

interface UserResponse {
  token: string;
  id: string;
  firstName: string;
  lastName: string;
  image: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }: UserDetails) {
      this.loading = true;
      try {
        const { data } = await axios.post<UserResponse>(
          "https://dummyjson.com/user/login",
          {
            username,
            password,
            expiresInMins: 30,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        const token = useCookie("token", { maxAge: 60 * 60 * 24 * 7 });
        const user = useCookie("user_details", { maxAge: 60 * 60 * 24 * 7 });
        token.value = data.token; // set token to cookie
        user.value = JSON.stringify(data);
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
