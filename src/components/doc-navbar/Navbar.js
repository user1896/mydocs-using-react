import NavChapter from "./NavChapter";
import NavChapterTitle from "./NavChapterTitle";
import NavChapterAccordion from "./NavChapterAccordion";
import AccordionSection from "./AccordionSection";

export default function Navbar(){
	return (
		<nav className="h-screen w-80 bg-red-950" > {/* when with is less then 1020px we should make "width: 100%" */}
			<NavChapter>

				<NavChapterTitle>
					Create React.js application
				</NavChapterTitle>

				<NavChapterAccordion>

					<AccordionSection>
						Add Tailwind CSS
					</AccordionSection>

					<AccordionSection>
						Build the app for production mode
					</AccordionSection>

					<AccordionSection>
						Deploy the App to GitHub Pages
					</AccordionSection>

				</NavChapterAccordion>

			</NavChapter>

			<NavChapter></NavChapter>
			<NavChapter></NavChapter>
		</nav>
	)
}