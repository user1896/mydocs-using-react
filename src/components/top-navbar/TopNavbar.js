import Button from "../Button";
import { FaBars } from "react-icons/fa";
import navbarContext from "../../context/navbarContext";
import { useContext } from "react";

export default function TopNavbar({setToggleNavbar}){
	const toggleNavbar = useContext(navbarContext)
	
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