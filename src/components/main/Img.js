export default function Img({src, alt, className}){
	return (
		<div className="p-3 flex justify-center">
			<img src={src} alt={alt} className={className} />
		</div>
	)
}