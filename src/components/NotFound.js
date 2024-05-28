import { H1 } from "./left-navbar/ExportsNavbar";
import { Link } from "react-router-dom";
import { PiFileXFill } from "react-icons/pi";

export default function NotFound(){
	return (
		<div className="h-[calc(100vh-3rem)] flex flex-col justify-center items-center" >
			<div className="flex justify-center items-center text-5xl mb-4" >
				<p>404 ERROR</p>
				<PiFileXFill />
			</div>
			<H1>Page Not Found</H1>
			<Link to="/" className="text-teal-400 mt-2" >Go to the <strong>Home</strong> page</Link>
		</div>
	)
}