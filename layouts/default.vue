<template>
  <v-app>
    <v-app-bar app color="#005b96">
      <v-toolbar-title>
        <v-app-bar-nav-icon>
          <v-btn to="/" icon>
            <v-icon icon="mdi-home" />
          </v-btn>
        </v-app-bar-nav-icon>
      </v-toolbar-title>
      <v-toolbar-title>
        <div class="d-flex">
          <v-spacer class="text-end">
            <NuxtLink
              to="/products"
              class="btn text-decoration-none text-primary"
            >
              Product
            </NuxtLink>
          </v-spacer>
          <v-spacer class="text-end">
            <NuxtLink to="/" class="btn text-decoration-none text-primary">
              Home
            </NuxtLink>
          </v-spacer>
          <v-spacer class="text-end">
            <NuxtLink to="/about" class="btn text-decoration-none text-primary">
              About
            </NuxtLink>
          </v-spacer>
        </div>
      </v-toolbar-title>
      <v-toolbar-title>
        <div class="d-flex justify-content-center">
          <v-text-field
            prepend-icon="mdi-magnify"
            hide-details
            single-line
            class="pa-4"
          ></v-text-field>
        </div>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
<style scoped>
.router-link-exact-active {
  color: #43b883;
}
</style>
