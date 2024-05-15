export default function Main({children}){
	return(
		<main className="bg-amber-600 mt-12 p-7 max-w-screen-2xl absolute lg:left-80" >
			{/* remove margin-left when width is less than 1020px */}
			{/* the main is not about having a margin, it's about not going more than 1536px (fix it) */}
			{children}
		</main>
	)
}