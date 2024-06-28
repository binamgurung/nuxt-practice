<template>
  <v-app>
    <!-- Application Bar with Search Bar -->
    <v-app-bar app color="secondary">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>

      <!-- Navigation list -->
      <v-toolbar-title class="d-none d-sm-flex">
        <v-row>
          <v-col cols="4">
            <NuxtLink to="/" class="btn text-decoration-none text-primary">
              Home
            </NuxtLink>
          </v-col>
          <v-col cols="4">
            <NuxtLink
              to="/products"
              class="btn text-decoration-none text-primary"
            >
              Products
            </NuxtLink>
          </v-col>
          <v-col cols="4">
            <NuxtLink to="/about" class="btn text-decoration-none text-primary">
              About
            </NuxtLink>
          </v-col>
        </v-row>
      </v-toolbar-title>

      <!-- Navigation Icons -->
      <v-toolbar-title class="nav-icon">
        <v-row>
          <v-col cols="6">
            <NuxtLink to="/" class="btn text-decoration-none">
              <v-icon icon="mdi-cart" color="grey"></v-icon>
            </NuxtLink>
          </v-col>
          <v-col cols="6">
            <NuxtLink to="/" class="btn text-decoration-none">
              <v-icon icon="mdi-heart" color="grey"></v-icon>
            </NuxtLink>
          </v-col>
        </v-row>
      </v-toolbar-title>

      <!-- Search Bar -->
      <v-text-field
        label="Search"
        prepend-icon="mdi-magnify"
        variant="outlined"
        class="search-bar py-20"
        clearable
      ></v-text-field>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="navigate(item.link)"
        >
          <v-list-item-content class="d-inline-flex">
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid class="pa-10">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false, // State to control the drawer visibility
    items: [
      { title: "Home", icon: "mdi-home", link: "/" },
      { title: "Products", icon: "mdi-cube-outline", link: "/products" },
      { title: "About", icon: "mdi-information", link: "/about" },
    ],
  }),
  methods: {
    navigate(link) {
      this.$router.push(link);
      this.drawer = false;
    },
  },
};
</script>
<style scoped>
.router-link-exact-active {
  color: #43b883;
}
.search-bar {
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
}

/* Change the placeholder text color */
.search-bar input::placeholder {
  color: gray;
}
.nav-icon {
  max-width: 95px;
}
</style>
