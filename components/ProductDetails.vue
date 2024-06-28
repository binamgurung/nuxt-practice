<template>
  <v-card>
    <v-row class="pa-8">
      <v-col cols="6" sm="12" md="6" lg="6" class="pa-8" style="height: 400px">
        <v-img :src="product.image" alt="product image" />
      </v-col>
      <v-divider vertical></v-divider>
      <v-col
        cols="6"
        sm="12"
        md="6"
        lg="6"
        class="pa-8"
        style="text-align: justify"
      >
        <h2 class="text-4xl my-2">{{ product.title }}</h2>
        <p class="text-xl font-bold my-2">$ {{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-2 pb-2">Product Decription :</h3>
        <p class="mb-7 text-wrap">{{ product.description }}</p>
        <v-row>
          <v-col cols="4" sm="12" md="12" lg="4" style="padding: 0">
            <div class="d-inline-flex align-items-center" style="width: 100%">
              <v-icon
                icon="mdi-minus"
                @click="decrement"
                style="padding-top: 30px"
              ></v-icon>
              <v-text-field
                v-model="quantity"
                type="number"
                style="width: 100%; text-align: center"
                min="1"
                readonly
              ></v-text-field>
              <v-icon
                icon="mdi-plus"
                style="padding-top: 30px"
                @click="increment"
              ></v-icon>
            </div>
          </v-col>
          <v-col cols="8" sm="12" md="12" lg="8" style="padding: 0">
            <v-btn
              class="ma-2 text-primary d-inline"
              color="secondary"
              style="width: 100%"
            >
              <v-icon icon="mdi-cart" end></v-icon>Add to Cart
            </v-btn>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="12" style="padding: 0">
            <v-btn
              class="ma-2 text-primary d-inline"
              color="secondary"
              style="width: 100%"
              >Buy Now
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
const { product } = defineProps(["product"]);

const quantity = ref(1);

const increment = () => {
  quantity.value += 1;
};

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
  }
};
</script>
