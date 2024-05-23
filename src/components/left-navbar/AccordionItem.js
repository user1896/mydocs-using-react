import { Link } from "react-router-dom";

export default function AccordionItem({children, toLink}){
	return(
		<div className="py-1 px-4 flex" >
			<Link to={toLink} className="w-full p-0.5 hover:bg-slate-700" >
				{children}
			</Link>
		</div>
	)
}