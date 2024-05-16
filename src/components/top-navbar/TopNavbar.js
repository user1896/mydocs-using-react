import Button from "../Button";
import { FaBars } from "react-icons/fa";

export default function TopNavbar({toggleNavbar, setToggleNavbar}){
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