export function optimiseInteractive() {
	const toggleLayer = (target: HTMLElement, enabled: boolean) => {
		if (!target.classList.contains("interactive")) return;

		target.style.willChange = enabled
			? "transform, background-color, color"
			: "auto";
	};

	document.addEventListener(
		"mouseover",
		(e) => {
			toggleLayer(e.target as HTMLElement, true);
		},
		{ passive: true },
	);

	document.addEventListener(
		"mouseout",
		(e) => {
			toggleLayer(e.target as HTMLElement, false);
		},
		{ passive: true },
	);

	// 3. Handle Keyboard Focus
	document.addEventListener("focusin", (e) => {
		toggleLayer(e.target as HTMLElement, true);
	});

	document.addEventListener("focusout", (e) => {
		toggleLayer(e.target as HTMLElement, false);
	});
}
