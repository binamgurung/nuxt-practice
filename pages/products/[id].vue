<template>
  <div>
    <ProductDetails :product="product" /> 
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
const { data: product } = await useFetch(uri);
</script>

<style scoped></style>
