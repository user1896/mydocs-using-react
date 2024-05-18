import Title1 from "./Title1";
import Title2 from "./Title2";

export default function FullChapter({toggleNavbar}){
	return (
		<>
			<Title1 toggleNavbar={toggleNavbar} />
			<Title2 toggleNavbar={toggleNavbar} />
		</>
	)
}