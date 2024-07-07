<template>
  <v-row class="pa-2">
    <h3>Shop By Categories</h3>
    <v-row>
      <v-card>
        <v-card-title></v-card-title>
      </v-card>
    </v-row>
  </v-row>
</template>

<script setup>
import { useCategoryStore } from "~/store/category";
import { ref, onMounted } from "vue";

const categoryStore = useCategoryStore();
const categories = ref([]);

onMounted(async () => {
  try {
    const response = await categoryStore.fetchCategories();
    categories.value = response;
    console.log(categories.value);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
});
</script>

<style lang="scss" scoped></style>
