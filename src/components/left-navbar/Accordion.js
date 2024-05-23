export default function Accordion({children, accordionState}) {
	const accordionClassName = `pl-4 overflow-hidden ${accordionState ? "" : "h-0"}`
	/* When it expands, make it a transition */
	return(
		<div className={accordionClassName} >
			{children}
		</div>
	)
}