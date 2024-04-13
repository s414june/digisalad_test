const path = require("path");

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": path.resolve(__dirname, "./src"),
    // 其他别名
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://use.typekit.net/wel8ibk.css",
        },
      ],
    },
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, "docs"),
    },
  },
});
