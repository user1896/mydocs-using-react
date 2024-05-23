import { Link } from "react-router-dom";
import Button from "../Button";
import { IoIosArrowForward } from "react-icons/io";

export default function ChapterTitle({children, onClick, toLink}){
	return(
		<div
			className="
				text-xl font-medium py-1 px-4 w-full
				flex items-center justify-between
			"
		>
			<Link to={toLink} className="w-full p-0.5 hover:bg-slate-700" >
				{children}
			</Link>
			{/* this arrow should change to "down" when the acccordion is opened */}
			<Button className="hover:bg-slate-700 p-1.5" onClick={onClick} >
				<IoIosArrowForward />
			</Button>
		</div>
	)
}