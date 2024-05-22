import {Main, P, H2, H3, H4, H5, UList, OList, Img} from "../../../../main/ExportsMain";
import img2 from "../../images/ch1-img2.png";

export default function Content(){
	return (
		<Main>
			<H3>1.2. Distributed VCS</H3>
			<P>
				These systems do not necessarily rely on a central server to store all the versions of a project file.
			</P>
			<P>
				In Distributed VCS, every contributor has a local copy or “clone” of the main repository i.e. everyone 
				maintains a local repository of their own which contains all the files and metadata present in the 
				main repository.
			</P>
			<Img src={img2} alt="Distributed VCS" />
			<P>
				Every programmer maintains a local repository on its own, which is actually the copy or clone of the 
				central repository on their hard drive. They can commit and update their local repository without 
				any interference.
			</P>
			<P>
				They can update their local repositories with new data from the central server by an operation 
				called “pull” and affect changes to the main repository by an operation called “push” from their 
				local repository.
			</P>
			<p>
				The act of cloning an entire repository into your workstation to get a local repository gives you the 
				following advantages:
			</p>
			<UList>
				<li>
					All operations (except push & pull) are very fast because the tool only needs to access the hard 
					drive, not a remote server. Hence, you do not always need an internet connection.
				</li>
				<li>
					Since every contributor has a full copy of the project repository, they can share changes with one 
					another if they want to get some feedback before affecting changes in the main repository.
				</li>
				<li>
					It lets developers work in an isolated environment, deferring (تأجيل) integration until they’re at 
					a convenient point to merge with other users.
				</li>
				<li>
					If the central server gets crashed at any point of time, the lost data can be easily recovered 
					from any one of the contributor’s local repositories.
				</li>
			</UList>
		</Main>
	)
}