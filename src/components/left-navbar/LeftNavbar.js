import {useToggleNavbar} from "../../context/navbarContext";

export default function LeftNavbar({children}){
	const toggleNavbar = useToggleNavbar()
	const navClassName = `
		h-[calc(100%-3rem)] w-full lg:w-80 overflow-x-hidden overflow-y-auto fixed top-12 left-0
		${ toggleNavbar ? "" : "hidden" } lg:block
		scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800
	`

	return (
		<nav className={navClassName} >
			{children}
		</nav>
	)
}