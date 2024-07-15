<template>
  <v-row>
    <v-col cols="12" md="4" lg="3">
      <NuxtLink
        to="/"
        style="text-decoration: none; cursor: pointer; color: grey"
      >
        Home
      </NuxtLink>
      <span style="color: grey"> > {{ route.meta.title }}</span>
      <h1 class="py-2">{{ route.meta.title }}</h1>
    </v-col>
    <v-col cols="12" md="8" lg="9"> </v-col>
  </v-row>
  <v-row>
    <v-col
      cols="12"
      md="12"
      lg="12"
      v-if="isFilterVisible"
      id="filterSection"
      class="d-inline-block"
    >
      <div class="d-inline-block py-2" style="width: 50%">
        <v-btn variant="outlined" style="opacity: 50%" @click="hideFilter"
          >Hide Filter</v-btn
        >
        <span style="float: right">{{ products.length }} results</span>
      </div>
      <div style="width: 50%">
        <v-range-slider
          v-model="priceRange"
          :min="0"
          :max="100"
          :step="5"
          class="my-4"
          @input="filterProducts"
        >
          <template v-slot:prepend>
            <h3>Price</h3>
          </template>
          <template v-slot:append>
            <br />
            <div>${{ priceRange[0] }} - ${{ priceRange[1] }}</div>
          </template>
        </v-range-slider>
      </div>
    </v-col>
    <v-col cols="12" md="8" lg="12">
      <div
        class="d-inline-block py-4"
        style="width: 50%"
        v-if="!isFilterVisible"
      >
        <v-btn variant="outlined" style="opacity: 50%" @click="showFilter"
          >Show Filter</v-btn
        >
        <span class="mx-2">{{ products.length }} results</span>
      </div>
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
import { storeToRefs } from "pinia";

useHead({
  title: "Products",
});
definePageMeta({
  title: "Products",
});
const isFilterVisible = ref(true);

const hideFilter = () => {
  isFilterVisible.value = false;
};
const showFilter = () => {
  isFilterVisible.value = true;
};

const total_products = ref();
const filteredProducts = ref([]);
const priceRange = ref([0, 100]);
const route = useRoute();
const categoryStore = useProductsByCategoryStore();
const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore);

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
      await productsStore.fetchProducts();
      console.log(products);
    } else {
      const category = route.query.category;
      const response = await categoryStore.fetchCategoryProducts(category);
      products.value = response.products;
      total_products.value = response.total;
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
