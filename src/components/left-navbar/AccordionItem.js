import { Link } from "react-router-dom";

export default function AccordionItem({children, toLink}){
	return(
		<div className="px-4 flex" >
			<Link to={toLink} className="h-8 w-full p-0.5 hover:bg-slate-700 overflow-hidden" >
				{children}
			</Link>
		</div>
	)
}