export default function Main({children, toggleNavbar, isOnTopOfThePage}){
	const containerClassName = `${ topPaddingNeeded ? "" : "pt-12" } lg:ml-80 flex justify-center`
	const mainClassName = `text-justify p-7 max-w-screen-lg ${ toggleNavbar ? "hidden" : "" }`

	return(
		<div className="pt-12 lg:ml-80 flex justify-center" >
			<main className={mainClassName} >
				{children}
			</main>
		</div>
	)
}