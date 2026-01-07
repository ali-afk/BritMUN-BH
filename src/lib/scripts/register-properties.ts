import { flatten } from "flat";
import {
	DefaultProperties,
	type PropertyConfig,
	type PropertyNode,
} from "$data";

export function registerProperties() {
	const properties = flatten(DefaultProperties, {
		delimiter: "-", // Becomes key-key2-key3...-value
	}) as Record<string, PropertyNode>;

	const keys = Object.keys(properties);

	keys.forEach((key) => {
		if (key.includes("-config-")) return;

		const value = properties[key];
		const cssVarName = `--${key.replace("-value", "")}`;
		const pathParts = key.split("-");
		const rootKey = pathParts[0];
		const subKey = pathParts[1];

		const props = DefaultProperties as any;
		const groupConfig: PropertyConfig | undefined =
			props[rootKey]?.[subKey]?.config || props[rootKey]?.config;

		const syntax = groupConfig?.syntax || "*";
		const inherits = groupConfig?.inherits ?? true;
		const initialValue = typeof value === "object" ? "" : String(value);
		try {
			window.CSS.registerProperty({
				name: cssVarName,
				syntax: syntax,
				inherits: inherits,
				initialValue: initialValue,
			});
		} catch (e: any) {}
	});
}
