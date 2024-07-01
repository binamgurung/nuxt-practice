<template>
  <v-app>
    <!-- Application Bar with Search Bar -->
    <v-app-bar app color="secondary">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="app-name">{{
        $config.public.app_name
      }}</v-toolbar-title>

      <!-- Navigation List -->
      <v-row class="d-none d-lg-flex d-md-flex text-center">
        <v-col
          cols="4"
          col-md="4"
          col-lg="4"
          v-for="item in items"
          :key="item.title"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-toolbar-title
              v-bind="props"
              :class="{ 'hovering-title': isHovering }"
              style="height: 35px; cursor: pointer"
            >
              <NuxtLink
                :to="item.link"
                class="btn text-decoration-none text-primary"
              >
                {{ item.title }}
              </NuxtLink>
            </v-toolbar-title>
          </v-hover>
        </v-col>
      </v-row>

      <!-- Navigation Icons -->
      <v-toolbar-title class="nav-icon d-none d-lg-flex d-md-flex">
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

      <v-toolbar-title>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Search"
              prepend-icon="mdi-magnify"
              variant="outlined"
              class="search-bar py-20"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- Search Bar -->
      </v-toolbar-title>
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
    <v-footer color="secondary" text-primary>
      <v-container class="mx-1 py-4">
        <v-row justify="center">
          <v-col cols="12" lg="3" md="3" sm="12" class="contact-us">
            <h3 class="pl-5">Contact Us</h3>
            <v-list-item
              v-for="contact in contacts"
              :key="contact"
              rounded="xl"
              variant="text"
            >
              <template v-slot:prepend>
                <v-icon :icon="contact.icon"></v-icon>
              </template>
              <v-list-item-title
                v-text="contact.content"
                class="footer-text-list"
                style="white-space: inherit"
              ></v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col cols="12" lg="3" md="3" sm="12" class="services">
            <h3 class="pl-5">Services</h3>
            <v-list-item
              v-for="service in services"
              :key="service"
              rounded="xl"
              variant="text"
            >
              <template v-slot:prepend>
                <v-icon :icon="service.icon"></v-icon>
              </template>
              <v-list-item-title
                v-text="service.content"
                style="white-space: inherit"
              ></v-list-item-title>
            </v-list-item>
          </v-col>

          <v-col
            cols="12"
            lg="6"
            md="6"
            sm="12"
            p="5"
            style="text-align: center"
          >
            <v-btn
              v-for="link in links"
              :key="link"
              color="white"
              rounded="xl"
              variant="text"
            >
              {{ link }}
            </v-btn>
          </v-col>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} —
            <strong>{{ $config.public.app_name }}</strong>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
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
    links: ["Home", "About Us", "Team", "Services", "Blog"],
    contacts: [
      { icon: "mdi-phone", content: "9800100001" },
      { icon: "mdi-email", content: "test@gmail.com" },
      { icon: "mdi-map-marker", content: "Parshyang, Pokhara-5" },
    ],
    services: [
      { icon: "mdi-truck", content: "Delivery Service" },
      { icon: "mdi-headset", content: "Customer Service" },
      { icon: "mdi-package-variant", content: "Return Policy" },
    ],
  }),
  methods: {
    navigate(link) {
      this.$router.push(link);
      this.drawer = false;
    },
  },
  layout: "footer",
};
</script>
<style scoped></style>
