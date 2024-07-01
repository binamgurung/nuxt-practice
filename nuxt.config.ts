import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  //...
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
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
