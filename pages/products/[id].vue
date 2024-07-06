<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://dummyjson.com/products/" + id;
const { data: product } = await useFetch(uri);
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product Not found!!",
    fatal: true,
  });
}

</script>

<style scoped></style>
