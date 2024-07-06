<template>
  <v-row>
    <v-hover v-slot="{ isHovering, props }">
      <v-col cols="12" md="6" lg="6" v-bind="props">
        <v-img
          src="https://img.freepik.com/free-photo/3d-cartoon-beauty-products_23-2151503291.jpg?t=st=1720177371~exp=1720180971~hmac=9de86ca9f0c8c18ef08c7eb998692c765210271a0a38078b728f8ee4ea52370e&w=1800"
          alt="beauty"
          :aspect-ratio="1"
          style="height: 95%"
          class="position-relative"
          cover
        >
          <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-black opacity-50 v-card--reveal text-h2"
              style="height: 100%"
            >
              <NuxtLink :to="{ path: '/products', query: { category: 'beauty' } }">
                <v-btn
                    class="btn-primary position-absolute"
                    style="right: 300px; top: 500px; color: black"
                >
                  Shop Now
                </v-btn>
              </NuxtLink>
            </div>
          </v-expand-transition>
        </v-img>
      </v-col>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <v-col cols="12" md="6" lg="6" v-bind="props">
        <v-img
          src="https://img.freepik.com/free-psd/view-3d-geometric-vases_23-2151505452.jpg?t=st=1720178208~exp=1720181808~hmac=5fe0c2ee05584e66b8e4baca1123975576fc161387f6f8292dcae2d7acf30732&w=1800"
          alt="home-decor"
          :aspect-ratio="1"
          cover
          style="height: 95%"
        >
          <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-black opacity-50 v-card--reveal text-h2"
              style="height: 100%"
            >
              <NuxtLink :to="{ path: '/products', query: { category: 'home-decoration' } }">
              <v-btn
                class="btn-primary position-absolute"
                style="right: 300px; top: 500px; color: black"
              >
                Shop Now
              </v-btn>
              </NuxtLink>

            </div>
          </v-expand-transition>
        </v-img>
      </v-col>
    </v-hover>
  </v-row>
</template>

<script setup>

</script>

<style scoped></style>
