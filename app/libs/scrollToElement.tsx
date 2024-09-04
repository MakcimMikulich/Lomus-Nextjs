export function scrollToElement(element: HTMLElement): void {
	let offset = 0;
	let currentElement: HTMLElement | null = element;

	while (currentElement) {
		offset += currentElement.offsetTop;
		currentElement = currentElement.offsetParent as HTMLElement | null;
	}

	window.scrollTo({
		top: offset,
		behavior: "smooth",
	});
}
