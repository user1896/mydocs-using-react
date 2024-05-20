export default function Img({src, alt, className}){
	return (
		<div className="p-3 flex justify-center">
			{/* <Img> should not be placed inside a <P> because it contains a <div> and div can't be inside a <p> */}
			<img src={src} alt={alt} className={className} />
		</div>
	)
}