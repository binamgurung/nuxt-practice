import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie("token"); // get token from cookies


  if (token.value) {
    // check if value exists
    authenticated.value = true; // update the state to authenticated
  }
});
