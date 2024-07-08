<template>
  <v-row>
    <v-col cols="12" md="4" lg="3">
      <h3>Price</h3>
      <v-range-slider
        v-model="priceRange"
        :min="0"
        :max="100"
        :step="5"
        class="my-4"
        @input="filterProducts"
      >
        <template v-slot:append>
          <br />
          <div>${{ priceRange[0] }} - ${{ priceRange[1] }}</div>
        </template>
      </v-range-slider>
    </v-col>
    <v-col cols="12" md="8" lg="9">
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
          v-for="p in filteredProducts"
          :key="p.id"
        >
          <ProductCard :product="p" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductsByCategoryStore } from "~/stores/productsByCategory";
import { useProductsStore } from "~/stores/products";

const products = ref([]);
const filteredProducts = ref([]);
const priceRange = ref([0, 100]);
const route = useRoute();
const categoryStore = useProductsByCategoryStore();
const productsStore = useProductsStore();

const filterProducts = () => {
  filteredProducts.value = products.value.filter((product) => {
    return (
      product.price >= priceRange.value[0] &&
      product.price <= priceRange.value[1]
    );
  });
};

onMounted(async () => {
  try {
    if (!route.query.category) {
      const response = await productsStore.fetchProducts();
      products.value = response.products;
    } else {
      const category = route.query.category;
      const response = await categoryStore.fetchCategoryProducts(category);
      products.value = response.products;
    }
    filterProducts(); // Initial filtering
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});

// Ensure filterProducts is called initially and whenever priceRange changes
watch(priceRange, (newRange) => {
  filterProducts();
});
</script>

<style scoped>
/* Add any scoped styles here */
</style>
