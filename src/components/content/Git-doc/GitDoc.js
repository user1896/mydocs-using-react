import FullChapter1 from "./chapter-1/FullChapter";
import FullChapter2 from "./chapter-2/FullChapter";

export default function GitDoc({toggleNavbar}){
	return (
		<>
			<FullChapter1 toggleNavbar={toggleNavbar} />
			<FullChapter2 toggleNavbar={toggleNavbar} />
		</>
	)
}