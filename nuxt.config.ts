import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  //...
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@pinia/nuxt",
    "nuxt-snackbar",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  snackbar: {
    top: true,
    right: true,
  },
  imports: {
    dirs: ["stores"], // Automatically import stores from the stores directory
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ["~/assets/css/custom.css"],
  runtimeConfig: {
    public: {
      app_name: process.env.APP_NAME,
    },
  },
  app: {
    head: {
      title: process.env.APP_NAME,
    },
  },
});
