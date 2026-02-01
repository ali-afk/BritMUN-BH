import { Logo as logo } from "$assets/shared";
import type { FilePath, Image } from "$types/component-props";

export const Logo = {
	url: logo as FilePath,
	dimensions: { width: 800, height: 706 },
} as const satisfies Image;
