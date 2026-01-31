import {
	Dexter,
	Disec,
	Ecofin,
	Fantasy,
	GreysAnatomy,
	Iaea,
	JpMorgan,
	Jumanji,
	LegallyBlonde,
	Psicologia,
	Sports,
	Uncsw,
	Unesco,
	Unicef,
	Unodc,
	Unsc,
	Vigilante,
	Who,
} from "$assets/councils";
import type { FilePath, Image } from "$types/component-props";

export const CouncilImages = {
	Unsc: {
		url: Unsc as FilePath,
		dimensions: { width: 800, height: 681 },
	},
	Unicef: {
		url: Unicef as FilePath,
		dimensions: { width: 800, height: 800 },
	},
	Unodc: {
		url: Unodc as FilePath,
		dimensions: { width: 800, height: 800 },
	},
	Ecofin: {
		url: Ecofin as FilePath,
		dimensions: { width: 800, height: 800 },
	},
	Unesco: {
		url: Unesco as FilePath,
		dimensions: { width: 800, height: 450 },
	},
	Uncsw: {
		url: Uncsw as FilePath,
		dimensions: { width: 2054, height: 2022 },
	},
	Disec: {
		url: Disec as FilePath,
		dimensions: { width: 800, height: 800 },
	},
	GreysAnatomy: {
		url: GreysAnatomy as FilePath,
		dimensions: { width: 800, height: 800 },
	},
	LegallyBlonde: {
		url: LegallyBlonde as FilePath,
		dimensions: { width: 800, height: 800 },
	},
	JpMorgan: {
		url: JpMorgan as FilePath,
		dimensions: { width: 800, height: 800 },
	},
	Sports: {
		url: Sports as FilePath,
		dimensions: { width: 342, height: 158 },
	},
	Psicologia: {
		url: Psicologia as FilePath,
		dimensions: { width: 800, height: 800 },
	},
	Iaea: {
		url: Iaea as FilePath,
		dimensions: { width: 800, height: 698 },
	},
	Jumanji: {
		url: Jumanji as FilePath,
		dimensions: { width: 800, height: 303 },
	},
	Fantasy: {
		url: Fantasy as FilePath,
		dimensions: { width: 800, height: 800 },
	},
	Dexter: {
		url: Dexter as FilePath,
		dimensions: { width: 800, height: 800 },
	},
	Vigilante: {
		url: Vigilante as FilePath,
		dimensions: { width: 800, height: 800 },
	},
	Who: {
		url: Who as FilePath,
		dimensions: { width: 800, height: 706 },
	},
} as const satisfies Record<string, Image>;
