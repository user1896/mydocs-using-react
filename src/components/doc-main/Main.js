export default function Main({children}){
	return(
		<main className="bg-amber-600 ml-80 p-7 max-w-screen-2xl" >
			{/* remove margin-left when width is less than 1020px */}
			{children}
		</main>
	)
}