<template>
  <div></div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useUserStore } from "~/store/user";

definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});
onMounted(async () => {
  try {
    const userStore = useUserStore();
    if (!userStore.user) {
      await userStore.fetchUser();
    }
    const userId = userStore.user.id;
    let url = "https://dummyjson.com/carts/user/" + userId;
    const response = await axios.get(url);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>

<style lang="scss" scoped></style>
