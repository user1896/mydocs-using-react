import {Main, P, H2, H3, H4, H5, UList, OList, Img} from "../../../../main/ExportsMain";

export default function Content(){
	return (
		<Main>
			<H3>status, add, and revert</H3>
			<H4>git status</H4>
			<UList>
				<li>
					<strong>git status</strong>: displays the state of the working directory and the staging area. 
					It lets you see which changes have been staged, which haven't, and which files aren't being tracked 
					by Git.
				</li>
			</UList>
		</Main>
	)
}