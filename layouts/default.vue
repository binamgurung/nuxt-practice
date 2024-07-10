<template>
  <v-app>
    <!-- Application Bar with Search Bar -->
    <v-app-bar app color="secondary">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="app-name">
        <NuxtLink
          to="/"
          style="text-decoration: none; cursor: pointer; color: #ffffff"
        >
          {{ $config.public.app_name }}
        </NuxtLink>
      </v-toolbar-title>

      <!-- Navigation List -->
      <!-- <v-row class="d-none d-lg-flex d-md-flex text-center">
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
      </v-row> -->
      <!-- Search Bar -->
      <v-toolbar-title>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Search"
              prepend-icon="mdi-magnify"
              variant="outlined"
              class="search-bar py-20"
              clearable
            />
          </v-col>
        </v-row>
      </v-toolbar-title>
      <!-- Navigation Icons -->
      <v-row
        class="d-none d-lg-flex d-md-flex"
        style="width: 20px; text-align: center"
      >
        <v-col cols="3" md="3" lg="3">
          <v-toolbar-title class="nav-icon">
            <v-btn
              style="font-size: larger"
              v-bind:disabled="authenticated == 0"
            >
              <NuxtLink to="/cart" class="btn text-decoration-none">
                <v-icon icon="mdi-cart" color="grey" />
              </NuxtLink>
            </v-btn>
          </v-toolbar-title>
        </v-col>
        <v-col cols="3" md="3" lg="3">
          <v-toolbar-title class="nav-icon">
            <v-btn
              style="font-size: larger"
              v-bind:disabled="authenticated == 0"
            >
              <NuxtLink to="/" class="text-decoration-none">
                <v-icon icon="mdi-heart" color="grey" />
              </NuxtLink>
            </v-btn>
          </v-toolbar-title>
        </v-col>
        <v-col cols="3" md="3" lg="3">
          <v-toolbar-title class="nav-icon">
            <v-btn style="font-size: larger">
              <v-icon
                icon="mdi-basket"
                color="grey"
                @click="navigate('/products')"
              />
            </v-btn>
          </v-toolbar-title>
        </v-col>
        <v-col cols="3" md="3" lg="3" v-if="authenticated">
          <v-toolbar-title class="nav-icon user-name text-break">
            <v-menu>
              <template v-slot:activator="{ props }">
                {{ user.firstName }}

                <v-icon icon="mdi-chevron-down" v-bind="props" />
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    <NuxtLink
                      to="/account"
                      style="text-decoration: none; color: #212121"
                    >
                      Profile
                    </NuxtLink></v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    @click.prevent="logout"
                    style="cursor: pointer"
                    >Logout</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar-title>
        </v-col>
        <v-col cols="3" md="3" lg="3" v-if="!authenticated">
          <v-toolbar-title class="nav-icon">
            <NuxtLink to="/login" class="btn text-decoration-none">
              <v-icon icon="mdi-login" color="grey" />
            </NuxtLink>
          </v-toolbar-title>
        </v-col>
      </v-row>
    </v-app-bar>
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="navigate(item.link)"
        >
          <v-list-item-title class="d-inline-flex">
            <v-icon>{{ item.icon }}</v-icon
            >{{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container fluid class="pa-10">
        <slot />
        <NuxtSnackbar />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer color="secondary" text-primary class="custom-footer">
      <v-container style="max-width: 100%" class="mx-1 py-4">
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
              />
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
              />
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

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";
import { useUserStore } from "~/stores/user";
import { onMounted } from "vue";

// Local state
const drawer = ref(false);
const items = ref([
  { title: "Home", icon: "mdi-home", link: "/" },
  { title: "Products", icon: "mdi-cube-outline", link: "/products" },
  { title: "About", icon: "mdi-information", link: "/about" },
]);
const links = ref(["Home", "About Us", "Team", "Services", "Blog"]);
const contacts = ref([
  { icon: "mdi-phone", content: "9800100001" },
  { icon: "mdi-email", content: "test@gmail.com" },
  { icon: "mdi-map-marker", content: "Parshyang, Pokhara-5" },
]);
const services = ref([
  { icon: "mdi-truck", content: "Delivery Service" },
  { icon: "mdi-headset", content: "Customer Service" },
  { icon: "mdi-package-variant", content: "Return Policy" },
]);

// Pinia store
const router = useRouter();
const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());
// const user = ref([]);
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted(async () => {
  try {
    const response = await userStore.fetchUser();
    user.value = response;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
});

// watch(userStore.user, (newValue) => {
//   user.value = newValue;
//   console.log(newValue);
// });

// Methods
const navigate = (link) => {
  router.push(link);
  drawer.value = false;
};

const logout = () => {
  logUserOut();
  router.push("/login");
};
</script>

<style scoped></style>
