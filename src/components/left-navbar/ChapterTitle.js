import Button from "../Button";
import { IoIosArrowForward } from "react-icons/io";

export default function ChapterTitle({children, onClick}){
	return(
		<div
			className="
				text-xl font-medium py-1 px-4 hover:bg-slate-700 w-full cursor-pointer
				flex items-center justify-between
			"
		>
			{children}
			{/* this arrow should change to "down" when the acccordion is opened */}
			<Button className="bg-red-500 p-1" onClick={onClick} >
				<IoIosArrowForward />
			</Button>
		</div>
	)
}