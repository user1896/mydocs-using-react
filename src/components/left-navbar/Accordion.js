export default function Accordion({children, accordionState, nbrTitles}) {
	/*
		Every AccordionItem has a height of "h-8" which is "32px". Now if we have two AccordionItems we need "64px"
		which is "h-16", so everytime a new AccordionItem is added we have to add +8 to the "h-" in Tailwind,
		we get: "h-" + nbrTitles * 8
		The problem happens when there are more than 10 AccordionItems, because in Tailwind at "h-80", the next
		increment will be "h-96" and not "h-88", so the value "h-88" won't work by default unless we modify the
		tailwind.config.js file.
		And that's why we need "if(nbrTitles >10) then "h-96""
	*/
	const tailwindHeight = nbrTitles <=10 ? "h-" + nbrTitles * 8 : "h-96"
	const accordionClassName = `
		pl-4 overflow-auto
		transition-height duration-500 h-0 ${accordionState ? tailwindHeight : ""}
		scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800
	`
	
	return(
		<div className={accordionClassName} >
			{children}
		</div>
	)
}