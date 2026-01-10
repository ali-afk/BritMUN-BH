import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";

export default defineConfig({
	plugins: [sveltekit(), devtoolsJson()],
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
