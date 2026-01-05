import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		transformer: "lightningcss",
		lightningcss: {
			targets: {
				chrome: 95,
				safari: 15,
				firefox: 95,
			},
		},
	},
	build: {
		cssMinify: "lightningcss",
	},
});
