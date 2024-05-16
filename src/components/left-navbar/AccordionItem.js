export default function AccordionItem({children}){
	return(
		<div className="py-1 px-4 hover:bg-slate-700 cursor-pointer" >
			{children}
		</div>
	)
}