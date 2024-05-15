import { FaBars } from "react-icons/fa";

export default function TopNavbar(){
	return(
		<nav className="w-full h-12 bg-green-400 flex items-center px-4 fixed top-0 left-0" >
			{/* "main" and "left navbar" will need top margin*/}
			<FaBars fontSize="1.25rem" />
		</nav>
	)
}