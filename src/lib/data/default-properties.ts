export type PropertyValue = string | boolean | number;
export interface PropertyConfig {
	syntax: string;
	inherits: boolean;
}

type PropertyData = {
	[key: string]: PropertyValue | PropertyData | PropertyConfig | undefined;
};

export type PropertyNode = PropertyData & {
	config?: PropertyConfig;
};

export const DefaultProperties = {
	color: {
		config: { syntax: "<color>", inherits: true },
		primary: {
			900: "#381446",
			700: "#653568",
			500: "#934599",
			300: "#d192d6",
			100: "#d9aecf",
		},
		secondary: {
			900: "#5d0634",
			700: "#940c53",
			500: "#b00e63",
			300: "#e695be",
			100: "#faeff5",
		},
		base: {
			900: "#000000",
			700: "#444444",
			500: "#888888",
			300: "#cccccc",
			100: "#ffffff",
		},
	},
	status: {
		config: { syntax: "<color>", inherits: true },
		danger: { 500: "#ec2c2b", 700: "#c00000" },
		warn: { 500: "#f59e0b", 700: "#b45309" },
		info: { 500: "#1dace8", 700: "#1682af" },
		success: { 500: "#22c55e", 700: "#15803d" },
	},
	fw: {
		config: { syntax: "<number>", inherits: true },
		light: 300,
		regular: 400,
		semibold: 600,
		bold: 700,
	},
	fs: {
		config: { syntax: "<length>", inherits: true },
		1: "12px",
		2: "14px",
		3: "16px",
		4: "2px",
		5: "25px",
		6: "35px",
		7: "5px",
	},
	space: {
		config: { syntax: "<length>", inherits: true },
		1: "5px",
		2: "10px",
		3: "14px",
		4: "20px",
		5: "30px",
		6: "45px",
		7: "70px",
		8: "95px",
	},
	transition: {
		easing: {
			config: { syntax: "*", inherits: true },
			value: "ease-out",
		},
		duration: { config: { syntax: "<time>", inherits: true }, value: "200ms" },
	},
	radius: { config: { syntax: "<length>", inherits: true }, value: "16px" },
	shadow: {
		color: {
			config: { syntax: "<color>", inherits: true },
			value: "rgba(0, 0, 0, 0.25)",
		},
	},
} as const;
