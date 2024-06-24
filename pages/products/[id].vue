<template>
  <div>
    <h1>Product Details Page</h1>
    <p>This id products details page for {{ id }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped></style>
