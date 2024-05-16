import { useState } from "react";
import {LeftNavbar, H1, Chapter, ChapterTitle, Accordion, AccordionItem} 
	from "../../left-navbar/NavbarExports";

export default function GitNavbar({toggleNavbar}){
	const [accordion1, setAccordion1] = useState(false)
	const [accordion2, setAccordion2] = useState(false)
	const [accordion3, setAccordion3] = useState(false)
	const [accordion4, setAccordion4] = useState(false)

	function handleAccordion1(){
		setAccordion1(!accordion1)
	}

	function handleAccordion2(){
		setAccordion2(!accordion2)
	}

	function handleAccordion3(){
		setAccordion3(!accordion3)
	}

	function handleAccordion4(){
		setAccordion4(!accordion4)
	}

	return (
		<LeftNavbar toggleNavbar={toggleNavbar} >
			<H1>Git & Github</H1>

			<Chapter>
				<ChapterTitle onClick={handleAccordion1} >
					1. Version control
				</ChapterTitle>

				<Accordion accordionState={accordion1} >
					<AccordionItem>
						1.1. Centralized VCS
					</AccordionItem>

					<AccordionItem>
						1.2. Distributed VCS
					</AccordionItem>
				</Accordion>
			</Chapter>

			<Chapter>
				<ChapterTitle onClick={handleAccordion2} >
					2. What is Git?
				</ChapterTitle>

				<Accordion accordionState={accordion2} >
					<AccordionItem>
						2.1. Initialise repository
					</AccordionItem>

					<AccordionItem>
						2.2. Remote
					</AccordionItem>

					<AccordionItem>
						2.3. Status
					</AccordionItem>

					<AccordionItem>
						2.4. Add
					</AccordionItem>
					
					<AccordionItem>
						2.5. Staging area (intermediate area, index or cache)
					</AccordionItem>

					<AccordionItem>
						2.6. Commit
					</AccordionItem>

					<AccordionItem>
						2.7. Pull
					</AccordionItem>

					<AccordionItem>
						2.8. Fast-forward VS non fast-forward merge
					</AccordionItem>

					<AccordionItem>
						2.9. Push
					</AccordionItem>

					<AccordionItem>
						2.10. Main branch vs master branch
					</AccordionItem>

					<AccordionItem>
						2.11. Origin vs main (or master)
					</AccordionItem>

					<AccordionItem>
						2.12. Branch
					</AccordionItem>

					<AccordionItem>
						2.13. Fetching and merging using the remote tracking branch
					</AccordionItem>

					<AccordionItem>
						2.14. Git stash
					</AccordionItem>

					<AccordionItem>
						2.15. Git config
					</AccordionItem>

					<AccordionItem>
						2.16. Git tag
					</AccordionItem>

					<AccordionItem>
						2.17. Git revert
					</AccordionItem>
				</Accordion>
			</Chapter>

			<Chapter>
				<ChapterTitle onClick={handleAccordion3} >
					3. What is GitHub?
				</ChapterTitle>

				<Accordion accordionState={accordion3} >
					<AccordionItem>
						3.1. Starting a new Git repository
					</AccordionItem>

					<AccordionItem>
						3.2. Personal access token
					</AccordionItem>

					<AccordionItem>
						3.3. Git clone vs fork vs having my own repository (download it)
					</AccordionItem>

					<AccordionItem>
						3.4. History of contributions in my profile
					</AccordionItem>
				</Accordion>
			</Chapter>

			<Chapter>
				<ChapterTitle onClick={handleAccordion4} >
					4. Other useful commands
				</ChapterTitle>

				<Accordion accordionState={accordion4} >
					<AccordionItem>
						4.1. General commands
					</AccordionItem>

					<AccordionItem>
						4.2. Git’s commands
					</AccordionItem>
				</Accordion>
			</Chapter>
		</LeftNavbar>
	)
}