export default function Main({children, toggleNavbar}){
	const mainClassName = `text-justify p-7 max-w-screen-lg ${ toggleNavbar ? "hidden" : "" }`

	return(
		<div className="lg:ml-80 flex justify-center" >
			<main className={mainClassName} >
				{children}
			</main>
		</div>
	)
}