import NavChapter from "./NavChapter";
import NavChapterTitle from "./NavChapterTitle";
import NavChapterAccordion from "./NavChapterAccordion";
import AccordionSection from "./AccordionSection";
import H1 from "./H1";

export default function Navbar(){
	return (
		<nav className="
			h-screen w-80 bg-red-950 overflow-x-hidden overflow-y-auto fixed
			scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800
		" >
			{/* when with is less then 1020px we should make "width: 100%" */}
			<H1>Git & Github</H1>

			<NavChapter>
				<NavChapterTitle>
					1. Version control
				</NavChapterTitle>

				<NavChapterAccordion>
					<AccordionSection>
						1.1. Centralized VCS
					</AccordionSection>

					<AccordionSection>
						1.2. Distributed VCS
					</AccordionSection>
				</NavChapterAccordion>
			</NavChapter>

			<NavChapter>
				<NavChapterTitle>
					2. What is Git?
				</NavChapterTitle>

				<NavChapterAccordion>
					<AccordionSection>
						2.1. Initialise repository
					</AccordionSection>

					<AccordionSection>
						2.2. Remote
					</AccordionSection>

					<AccordionSection>
						2.3. Status
					</AccordionSection>

					<AccordionSection>
						2.4. Add
					</AccordionSection>
					
					<AccordionSection>
						2.5. Staging area (intermediate area, index or cache)
					</AccordionSection>

					<AccordionSection>
						2.6. Commit
					</AccordionSection>

					<AccordionSection>
						2.7. Pull
					</AccordionSection>

					<AccordionSection>
						2.8. Fast-forward VS non fast-forward merge
					</AccordionSection>

					<AccordionSection>
						2.9. Push
					</AccordionSection>

					<AccordionSection>
						2.10. Main branch vs master branch
					</AccordionSection>

					<AccordionSection>
						2.11. Origin vs main (or master)
					</AccordionSection>

					<AccordionSection>
						2.12. Branch
					</AccordionSection>

					<AccordionSection>
						2.13. Fetching and merging using the remote tracking branch
					</AccordionSection>

					<AccordionSection>
						2.14. Git stash
					</AccordionSection>

					<AccordionSection>
						2.15. Git config
					</AccordionSection>

					<AccordionSection>
						2.16. Git tag
					</AccordionSection>

					<AccordionSection>
						2.17. Git revert
					</AccordionSection>
				</NavChapterAccordion>
			</NavChapter>

			<NavChapter>
				<NavChapterTitle>
					3. What is GitHub?
				</NavChapterTitle>

				<NavChapterAccordion>
					<AccordionSection>
						3.1. Starting a new Git repository
					</AccordionSection>

					<AccordionSection>
						3.2. Personal access token
					</AccordionSection>

					<AccordionSection>
						3.3. Git clone vs fork vs having my own repository (download it)
					</AccordionSection>

					<AccordionSection>
						3.4. History of contributions in my profile
					</AccordionSection>
				</NavChapterAccordion>
			</NavChapter>

			<NavChapter>
				<NavChapterTitle>
					4. Other useful commands
				</NavChapterTitle>

				<NavChapterAccordion>
					<AccordionSection>
						4.1. General commands
					</AccordionSection>

					<AccordionSection>
						4.2. Git’s commands
					</AccordionSection>
				</NavChapterAccordion>
			</NavChapter>
		</nav>
	)
}