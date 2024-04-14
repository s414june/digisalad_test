// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  modules: [
    // ...
    "@pinia/nuxt",
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://use.typekit.net/wel8ibk.css",
        },
      ],
      script: [
        {
          src: "https://www.youtube.com/iframe_api",
        },
      ],
    },
  },
});
