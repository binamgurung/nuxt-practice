<template>
  <v-card height="250">
    <v-card-item>
      <div class="text-center">
        <NuxtLink
          class="text-decoration-none text-secondary"
          :to="`products/${product.id}`"
        >
          <v-img
            :src="product.image"
            alt="product"
            class="thumb position-relative"
            style="cursor: pointer"
          />
        </NuxtLink>
        <v-btn
          class="ma-2 position-absolute top-0 opacity-30"
          style="right: 40px; background: lightgrey"
        >
          <v-icon icon="mdi-cart" end></v-icon>
        </v-btn>
        <v-btn
          class="ma-2 position-absolute opacity-30"
          style="top: 42px; right: 40px; background: lightgrey"
        >
          <v-icon icon="mdi-heart" end></v-icon>
        </v-btn>
        <h4 class="font-bold ext-gray-500 m-4 truncate">{{ product.title }}</h4>
        <NuxtLink
          class="text-decoration-none text-secondary"
          :to="`products/${product.id}`"
        >
          <p class="btn my-4">View Details</p>
        </NuxtLink>
      </div>
    </v-card-item>
  </v-card>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
