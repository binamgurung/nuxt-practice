<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Oops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn my-7" @click="handleClearError">Go To Home</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const handleClearError = () => {
  router.push({ path: "/" });
};
</script>

<style scoped></style>
