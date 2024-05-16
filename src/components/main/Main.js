export default function Main({children, toggleNavbar}){
	const mainClassName = `p-7 max-w-screen-2xl ${ toggleNavbar ? "hidden" : "" }`

	return(
		<div className="pt-12 lg:ml-80 flex justify-center" >
			<main className={mainClassName} >
				{children}
			</main>
		</div>
	)
}