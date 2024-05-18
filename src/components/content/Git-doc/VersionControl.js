import {Main, P, H2, H3, H4, H5, UList, OList, Img} from "../../main/MainExports";
import img1 from "./images/ch1-img1.png"
import img2 from "./images/ch1-img2.png"

export default function VersionControl({toggleNavbar}){
	return (
		<Main toggleNavbar={toggleNavbar} >
			<H2>1. Version control</H2>
			<P>
				Version control is the management of changes to documents, computer programs, large websites and other 
				collection of information.
				<br />
				There are two types of VCs:
				<UList>
					<li>Centralized Version Control System (CVCS)</li>
					<li>Distributed Version Control System(DVCS)</li>
				</UList>
			</P>
			<H3>1.1. Centralized VCS</H3>
			<P>
				Centralized version control system uses a central server to store all files and enables team 
				collaboration.
				<strong>It works on a single repository</strong> to which users can directly access a central server.
			</P>
			<Img src={img1} alt="Version control" />
			<P>
				The repository in the above diagram indicates a central server that could be local or remote which is
				directly connected to each of the programmer’s workstation.
			</P>
			<P>
				Every programmer can extract or update their workstations with the data present in the repository or
				can make changes to the data or commit in the repository. Every operation is performed directly on
				the repository.
			</P>
			<P>
				This method has some major drawbacks. Some of them are:
				<UList>
					<li>
						It is not locally available; meaning you always need to be connected to a network to perform any
						action.
					</li>
					<li>
						Since everything is centralized, in any case of the central server getting crashed or corrupted
						will result in losing the entire data of the project.
					</li>
				</UList>
				This is when Distributed VCS comes to the rescue.
			</P>
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
			<P>
				The act of cloning an entire repository into your workstation to get a local repository gives you the 
				following advantages:
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
			</P>
		</Main>
	)
}