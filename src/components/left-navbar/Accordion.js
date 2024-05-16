export default function Accordion({children, accordionState}) {
	const accordionClassName = `pl-4 overflow-hidden ${accordionState ? "" : "h-0"}`
	return(
		<div className={accordionClassName} >
			{children}
		</div>
	)
}