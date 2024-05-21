import {useToggleNavbar} from "../../context/navbarContext";

export default function LeftNavbar({children}){
	const toggleNavbar = useToggleNavbar()
	const navClassName = `
		h-screen w-full lg:w-80 pt-12 overflow-x-hidden overflow-y-auto fixed top-0 left-0
		${ toggleNavbar ? "" : "hidden" } lg:block
		scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800
	`

	return (
		<nav className={navClassName} >
			{children}
		</nav>
	)
}