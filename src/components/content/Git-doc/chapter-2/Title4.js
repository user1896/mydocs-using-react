import {Main, P, H2, H3, H4, H5, UList, OList, Img} from "../../../main/ExportsMain";
import img from "../images/ch2-p4.png";

export default function Title4(){
	return (
		<Main>
			<H3>2.4. Staging area and Commit</H3>

			<H4>2.4.1 Staging area (intermediate area, index or cache)</H4>
			<P>
				The staging area is where we will make a file or multiple files that we want to save in our next 
				commit to be ready to get added to the git (in other words in the next version of our local project).
			</P>
			<P>
				Instead of committing all of the changes you've made since the last commit, the stage lets you group 
				related changes into highly focused snapshots before actually committing it to the project history.
			</P>
			<P>
				As in any revision control system, it’s important to create atomic (very small) commits so that 
				it’s easy to track down bugs and revert changes with minimal impact on the rest of the project.
			</P>
			<P>
				For trivial git users staging may not serve any purpose at all.
			</P>

			<H4>2.4.2. Commit</H4>
			<P>
				commiting changes refers to recording snapshots of the repository at a given time; committed 
				snapshots can be thought of as “safe” versions of a project. Committed snapshots will never 
				change unless done explicitly.
			</P>
			<P>
				At a high-level, Git can be thought of as a timeline management utility. Commits are the core 
				building block units of a Git project timeline. Commits can be thought of as snapshots or milestones 
				along the timeline of a Git project.
			</P>
			<P>
				Git Snapshots are always committed to the local repository. This is fundamentally different 
				from SVN, wherein the working copy is committed to the central repository (SVN : Apache Subversion, 
				Centralized VCS)
			</P>
			<P>
				Whereas SVN tracks differences of a file, Git’s version control model is based on snapshots. 
				For example, a SVN commit consists of a diff compared to the original file added to the repository. 
				Git, on the other hand, records the entire contents of each file in every commit.
			</P>
			<Img src={img} alt="Nodes life cycle before and after commiting" />
			<P>
				Here, C1 is the initial commit, i.e. the snapshot of the first change from which another snapshot 
				is created with changes named C2. Note that the master points to the latest commit.
			</P>
			<P>
				Now, when I commit again, another snapshot C3 is created and now the master points to C3 instead of C2.
			</P>
			<P>
				This makes many Git operations much faster than SVN, since a particular version of a file doesn’t 
				have to be “assembled” from its diff, the complete revision of each file is immediately available 
				from Git's internal database.
			</P>
			<UList>
				<li>
					<strong>git commit -a</strong> : (same as --all) automatically "add" changes from all known files 
					(i.e. all files that are already listed in the index), and then perform the actual commit. <br />
					git commit will open up the locally configured text editor, and prompt for a commit message to be 
					entered, then a snapshot of all changes to tracked files (those located in the staging area) will 
					be committed.
				</li>
			</UList>
			<P>
				So if we add a file with <strong>git add</strong> once, it's now tracked, and if we modify it and 
				want to commit it, all we have to do is <strong>git commit -a</strong> instead of staging it again 
				and then commiting it.
			</P>
			<UList>
				<li>
					<strong>git commit -m "commit message"</strong> : a shortcut command that immediately creates a 
					commit with a passed commit message. By default, <strong>git commit</strong> will open up the 
					locally configured text editor, and prompt for a commit message to be entered. Passing 
					the -m option will forgo the text editor prompt in-favor of an inline message.
				</li>
				<li>
					<strong>git commit -a -m "commit message"</strong> : A power user shortcut command that combines 
					the -a and -m options. This combination immediately creates a commit of all the staged changes and 
					takes an inline commit message.
				</li>
				<li>
					<strong>git commit --amend</strong> : Passing this option will modify the last commit. Instead 
					of creating a new commit, staged changes will be added to the previous commit. This command will 
					open up the system's configured text editor (it will be pre-filled with the commit message we 
					previously entered. This indicates that we are not creating a new commit, but editing the last) 
					and prompt to change the previously specified commit message.
				</li>
			</UList>
		</Main>
	)
}