import Button from "../Button";
import { FaBars } from "react-icons/fa";
import {useToggleNavbar, useSetToggleNavbar} from "../../context/navbarContext";

export default function TopNavbar(){
	const toggleNavbar = useToggleNavbar()
	const setToggleNavbar = useSetToggleNavbar()
	
	function handleClick(){
		setToggleNavbar( !toggleNavbar )
	}

	return(
		<nav className="w-full h-12 bg-green-400 flex items-center px-4 fixed top-0 left-0" >
			<Button onClick={handleClick} className="lg:hidden">
				<FaBars fontSize="1.25rem" />
			</Button>
		</nav>
	)
}