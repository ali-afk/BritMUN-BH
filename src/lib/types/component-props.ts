export type LoadPriority = "high" | "low";

export interface FaqData {
	question: string;
	answer: string;
}

export interface TestimonialData {
	title: string;
	year: string;
	comment: string;
}

export type HttpPath = `http${string}://${string}`;
export type FilePath = `/${string}` | `./${string}`;

export type Image = {
	url: FilePath | HttpPath;
	dimensions: { width: number; height: number };
};

export type Council = {
	name: string;
	image: Image;
	backgroundGuide: string;
};

export type CouncilCategory = {
	name: string;
	councils: Council[];
};

export type DocumentLink = {
	label: string;
	href: string;
};

export type DocumentGroup = {
	links: DocumentLink[];
};
