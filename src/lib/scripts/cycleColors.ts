import type { PropertyNode } from "$data";

const colorScale: (100 | 300 | 500 | 700 | 900)[] = [900, 700, 500, 300, 100];

export function cycleColors(colorSet: PropertyNode, index: number) {
	return colorSet[colorScale[index % 5] ?? 500];
}
