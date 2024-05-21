import navbarContext from "../../context/navbarContext";
import { useContext } from "react";

export default function Main({children}){
	const toggleNavbar = useContext(navbarContext)
	const mainClassName = `text-justify p-7 max-w-screen-lg ${ toggleNavbar ? "hidden" : "" }`

	return(
		<div className="lg:ml-80 flex justify-center" >
			<main className={mainClassName} >
				{children}
			</main>
		</div>
	)
}