// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/css/main.css", "animate.css"],
	plugins: ["~/plugins/aos.client"],
	postcss: {
		plugins: {
			autoprefixer: {},
		},
	},
	experimental: {
		// 關閉 payloadExtraction 減少對 build/meta 雜湊 JSON 的依賴
		payloadExtraction: false,
	},
	nitro: {
		preset: "vercel", // 強制指定為 vercel 預設環境
	},
	modules: [
		// ...
		"@pinia/nuxt",
	],
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
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
})
