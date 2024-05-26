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
					<ChapterTitle onClick={handleAccordion1} toLink="/git-ch1" accordionState={ accordionState1 } >
						1. Version control
					</ChapterTitle>

					<Accordion accordionState={ accordionState1 } nbrTitles={2} >
						<AccordionItem toLink="/git-ch1-p1" >
							1.1. Centralized VCS
						</AccordionItem>

						<AccordionItem toLink="/git-ch1-p2" >
							1.2. Distributed VCS
						</AccordionItem>
					</Accordion>
				</Chapter>

				<Chapter>
					<ChapterTitle onClick={handleAccordion2} toLink="/git-ch2" accordionState={ accordionState2 } >
						2. What is Git?
					</ChapterTitle>

					<Accordion accordionState={ accordionState2 } nbrTitles={17} >
						<AccordionItem toLink="/git-ch2-p1" >
							2.1. Initialise repository
						</AccordionItem>

						<AccordionItem toLink="/git-ch2-p2" >
							2.2. Remote
						</AccordionItem>

						<AccordionItem toLink="/git-ch2-p3" >
							2.3. Status, add, and revert
						</AccordionItem>
						
						<AccordionItem toLink="/git-ch2-p4" >
							2.4. Staging area and Commit
						</AccordionItem>

						{/* <AccordionItem toLink="/git-ch2-p5" >
							2.5. Pull
						</AccordionItem>

						<AccordionItem toLink="/git-ch2-p6" >
							2.6. Fast-forward VS non fast-forward merge
						</AccordionItem>

						<AccordionItem toLink="/git-ch2-p7" >
							2.7. Push
						</AccordionItem>

						<AccordionItem toLink="/git-ch2-p8" >
							2.8. Main branch vs master branch
						</AccordionItem>

						<AccordionItem toLink="/git-ch2-p9" >
							2.9. Origin vs main (or master)
						</AccordionItem>

						<AccordionItem toLink="/git-ch2-p10" >
							2.10. Branch
						</AccordionItem>

						<AccordionItem toLink="/git-ch2-p11" >
							2.11. Fetching and merging using the remote tracking branch
						</AccordionItem>

						<AccordionItem toLink="/git-ch2-p12" >
							2.12. Git stash
						</AccordionItem>

						<AccordionItem toLink="/git-ch2-p13" >
							2.13. Git config
						</AccordionItem>

						<AccordionItem toLink="/git-ch2-p14" >
							2.14. Git tag
						</AccordionItem> */}
					</Accordion>
				</Chapter>

				{/* <Chapter>
					<ChapterTitle onClick={handleAccordion3} toLink="/git-ch3" accordionState={ accordionState3 } >
						3. What is GitHub?
					</ChapterTitle>

					<Accordion accordionState={ accordionState3 } nbrTitles={4} >
						<AccordionItem toLink="/git-ch3-p1" >
							3.1. Starting a new Git repository
						</AccordionItem>

						<AccordionItem toLink="/git-ch3-p2" >
							3.2. Personal access token
						</AccordionItem>

						<AccordionItem toLink="/git-ch3-p3" >
							3.3. Git clone vs fork vs having my own repository (download it)
						</AccordionItem>

						<AccordionItem toLink="/git-ch3-p4" >
							3.4. History of contributions in my profile
						</AccordionItem>
					</Accordion>
				</Chapter> */}

				{/* <Chapter>
					<ChapterTitle onClick={handleAccordion4} toLink="/git-ch4" accordionState={ accordionState4 } >
						4. Other useful commands
					</ChapterTitle>

					<Accordion accordionState={ accordionState4 } nbrTitles={2} >
						<AccordionItem toLink="/git-ch4-p1" >
							4.1. General commands
						</AccordionItem>

						<AccordionItem toLink="/git-ch4-p2" >
							4.2. Git’s commands
						</AccordionItem>
					</Accordion>
				</Chapter> */}
			</LeftNavbar>
		</>
	)
}