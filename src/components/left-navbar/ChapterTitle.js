import { Link } from "react-router-dom";
import Button from "../Button";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useToggleNavbar, useSetToggleNavbar } from "../../context/navbarContext";

export default function ChapterTitle({children, onClick, toLink, accordionState}){
	const toggleNavbar = useToggleNavbar()
	const setToggleNavbar = useSetToggleNavbar()
	
	function handleClick(){
		// setToggleNavbar( !toggleNavbar )
	}

	return(
		<div
			className="
				text-xl font-medium py-1 px-4 w-full
				flex items-center justify-between
			"
		>
			<Link to={toLink} className="w-full p-0.5 hover:bg-slate-700" onClick={handleClick} >
				{children}
			</Link>
			
			<Button className="hover:bg-slate-700 p-1.5" onClick={onClick} >
				{ accordionState ? <IoIosArrowDown /> : <IoIosArrowForward />}
			</Button>
		</div>
	)
}