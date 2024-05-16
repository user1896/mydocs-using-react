export default function Main({children}){
	return(
		<div className="bg-yellow-300 pt-12 lg:ml-80 flex justify-center">
			<main className="bg-amber-600 p-7 max-w-screen-2xl" >
				{children}
			</main>
		</div>
	)
}