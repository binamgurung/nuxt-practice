<template>
  <v-row>
    <v-col cols="4" v-for="p in products">
      <ProductCard :product="p" />
    </v-col>
  </v-row>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const products = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    products.value = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>

<style scoped></style>
