// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "animate.css"],
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
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
      htmlAttrs: {
        lang: "en"
      },
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
