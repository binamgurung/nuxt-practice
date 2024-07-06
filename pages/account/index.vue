<template>
  <p>This is restricted page</p>
</template>

<script setup>
definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});
</script>

<style lang="scss" scoped></style>
