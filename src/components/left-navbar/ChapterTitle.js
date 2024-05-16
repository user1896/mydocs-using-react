export default function ChapterTitle({children, onClick}){
	return(
		<div onClick={onClick} className="text-xl font-medium py-1 px-4 hover:bg-slate-700 w-full cursor-pointer" >
			{children}
		</div>
	)
}