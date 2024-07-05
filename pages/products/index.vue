<template>
  <v-row>
    <v-col cols="12" md="4" lg="3" v-for="p in products">
      <ProductCard :product="p" />
    </v-col>
  </v-row>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useCategoryStore } from "~/store/category";

const products = ref([]);
const route = useRoute();
const categoryStore = useCategoryStore();




onMounted(async () => {
  try {
    if(!route.query.category)
    {
      const response = await axios.get("https://dummyjson.com/products");
      products.value = response.data.products;
    }
    else {
      const category = route.query.category;
      const response = await categoryStore.fetchCategoryProducts(category);
      products.value = response.products;
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>

<style scoped></style>
