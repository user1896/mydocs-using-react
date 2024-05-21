import Chapter1 from "./chapter-1/full-chapter/Content";
import Chapter2 from "./chapter-2/full-chapter/Content";
import GitNavbar from "./GitNavbar";

export default function GitDoc(){
	return (
		<>
			<Chapter1/>
			<Chapter2/>
			<GitNavbar />
		</>
	)
}