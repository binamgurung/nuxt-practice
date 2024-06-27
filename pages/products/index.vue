<template>
  <v-row>
    <v-col cols="4" v-for="p in products">
      <ProductCard :product="p" />
    </v-col>
  </v-row>
</template>

<script setup>
//fetch the products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
