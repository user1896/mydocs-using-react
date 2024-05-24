import {LeftNavbar, H1, Chapter, ChapterTitle, Accordion, AccordionItem} 
	from "../../left-navbar/ExportsNavbar";
import TopNavbar from "../../top-navbar/TopNavbar";
import { useAccordion, useSetAccordion } from "../../../context/navbarContext";

export default function GitNavbar(){
	const accordion = useAccordion()
	const setAccordion = useSetAccordion()
	const accordionState1 = accordion === 1 ? true : false
	const accordionState2 = accordion === 2 ? true : false
	const accordionState3 = accordion === 3 ? true : false
	const accordionState4 = accordion === 4 ? true : false

	function handleAccordion1(){
		if( !accordion || accordion !== 1 )
			setAccordion(1) // the "OR ||" is for the accordion to open when another one is already opened
		else
			setAccordion(0) // so the accordion shrinks again
	}

	function handleAccordion2(){
		if( !accordion || accordion !== 2 )
			setAccordion(2)
		else
			setAccordion(0)
	}

	function handleAccordion3(){
		if( !accordion || accordion !== 3 )
			setAccordion(3)
		else
			setAccordion(0)
	}

	function handleAccordion4(){
		if( !accordion || accordion !== 4 )
			setAccordion(4)
		else
			setAccordion(0)
	}

	return (
		<>
			<TopNavbar />
			<LeftNavbar>
				<H1>Git & Github</H1>

				<Chapter>
					<ChapterTitle onClick={handleAccordion1} toLink="/1" accordionState={ accordionState1 } >
						1. Version control
					</ChapterTitle>

					<Accordion accordionState={ accordionState1 } nbrTitles={2} >
						<AccordionItem toLink="/1p1" >
							1.1. Centralized VCS
						</AccordionItem>

						<AccordionItem toLink="/1p2" >
							1.2. Distributed VCS
						</AccordionItem>
					</Accordion>
				</Chapter>

				<Chapter>
					<ChapterTitle onClick={handleAccordion2} toLink="/2" accordionState={ accordionState2 } >
						2. What is Git?
					</ChapterTitle>

					<Accordion accordionState={ accordionState2 } nbrTitles={17} >
						<AccordionItem toLink="/2p1" >
							2.1. Initialise repository
						</AccordionItem>

						<AccordionItem toLink="/2p2" >
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
					<ChapterTitle onClick={handleAccordion3} accordionState={ accordionState3 } >
						3. What is GitHub?
					</ChapterTitle>

					<Accordion accordionState={ accordionState3 } nbrTitles={4} >
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
					<ChapterTitle onClick={handleAccordion4} accordionState={ accordionState4 } >
						4. Other useful commands
					</ChapterTitle>

					<Accordion accordionState={ accordionState4 } nbrTitles={2} >
						<AccordionItem>
							4.1. General commands
						</AccordionItem>

						<AccordionItem>
							4.2. Git’s commands
						</AccordionItem>
					</Accordion>
				</Chapter>
			</LeftNavbar>
		</>
	)
}