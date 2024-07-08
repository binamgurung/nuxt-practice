<template>
  <v-row class="mx-auto" elevation="8" max-width="800">
    <h2 class="mt-4">Shop By Categories</h2>
    <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
      <v-slide-group-item
        v-for="category in categories"
        :key="category.name"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <NuxtLink
          :to="{
            path: '/products',
            query: { category: category.name.slug },
          }"
        >
          <v-card
            :class="['ma-4', selectedClass]"
            color="grey-lighten-1"
            height="200"
            width="150"
            @click="toggle"
          >
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition style="height: 100%">
                <v-img
                  :src="category.image"
                  alt="product"
                  style="cursor: pointer"
                  cover
                />
                <v-icon
                  v-if="isSelected"
                  color="white"
                  icon="mdi-close-circle-outline"
                  size="48"
                >
                </v-icon>
              </v-scale-transition>
            </div>
          </v-card>
        </NuxtLink>
      </v-slide-group-item>
    </v-slide-group>
  </v-row>
</template>

<script setup>
import { useCategoryStore } from "~/stores/category";
import { ref, onMounted } from "vue";

const categoryStore = useCategoryStore();
const categories = ref([]);
const dummyImages = {
  beauty:
    "https://img.freepik.com/free-photo/top-view-arrangement-with-beauty-bag-copy-space_23-2148301851.jpg?t=st=1720372038~exp=1720375638~hmac=84c3f2ca302a2ecd2a63d036df5896a1ada12327cbfa465fb8fbec608b74fd79&w=1380",
  fragrances:
    "https://img.freepik.com/free-photo/front-view-beautiful-light-perfume-inside-flask-yellow-surface_140725-20042.jpg?t=st=1720372154~exp=1720375754~hmac=ed8fafd7eb9489684e791a68cb1fb847d8c8bf3950aee90d6418fcc416e396af&w=826",
  furniture:
    "https://img.freepik.com/free-photo/living-room-scandinavian-interior-design_53876-146865.jpg?t=st=1720372205~exp=1720375805~hmac=eb38665cba91dc589eebeb6cc557fc266ac1e56934976893c89de4770d859531&w=1800",
  groceries:
    "https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?t=st=1720372263~exp=1720375863~hmac=f4f141dc3b2b284884070102c150bd04daf564be56e392deb82cbf4a4773c398&w=1800",
  "home-decoration":
    "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2722.jpg?t=st=1720372047~exp=1720375647~hmac=c04d1c87e33c84d53e27eb575800275afec071a7f68bd388f89a452a6c832057&w=826",
  "kitchen-accessories":
    "https://img.freepik.com/free-photo/various-pantry-products-ingredients_23-2148796319.jpg?t=st=1720372358~exp=1720375958~hmac=22f3304762182a71692ae8469e24fd1d4d8d54ffa005e9690209c0f50992bf31&w=1800",
  laptops:
    "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?t=st=1720372412~exp=1720376012~hmac=3d9a9d9ca4bea918b4825ac1f2a08e833eeff24b2b22b8856afbfbf7ced8a521&w=1800",
  "mens-shirts":
    "https://img.freepik.com/premium-photo/close-up-luxury-man-wrist-watches-placed-tree-trunk_85778-240.jpg?w=826",
};
onMounted(async () => {
  try {
    const response = await categoryStore.fetchCategories();
    categories.value = response.map((category) => ({
      name: category,
      image: dummyImages[category.slug],
    }));
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
});
</script>

<style lang="scss" scoped></style>
