import { Hero as hero } from "$assets/home";
import type { FilePath, Image } from "$types/component-props";

export const Hero = {
	url: hero as FilePath,
	dimensions: { width: 1920, height: 1080 },
} as const satisfies Image;
