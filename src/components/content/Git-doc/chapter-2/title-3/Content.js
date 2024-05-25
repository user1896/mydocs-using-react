import {Main, P, H2, H3, H4, H5, UList, OList, Img} from "../../../../main/ExportsMain";

export default function Content(){
	return (
		<Main>
			<H3>2.3. Status, Add, and Revert</H3>

			<H4>2.3.1. git status</H4>
			<UList>
				<li>
					<strong>git status</strong> : displays the state of the working directory and the staging area. 
					It lets you see which changes have been staged, which haven't, and which files aren't being tracked 
					by Git.
				</li>
			</UList>

			<H4>2.3.2. gid add</H4>
			<UList>
				<li>
					<strong>git add .</strong> :(the dot (.) at the end is included, the dot represents the current 
					directory we’re in, so all files in the current directory will get added) : adds a change in the 
					working directory to the staging area. It tells Git that you want to include updates to a 
					particular file in the next commit. <br />
					However, <strong>git add</strong> doesn't really affect the repository in any significant way—changes are not 
					actually recorded until you run <strong>git commit</strong>.
				</li>
				<li>
					<strong>git restore --staged file-name</strong> : to unstage changes and clean the staging area.
				</li>
				<li>
					<strong>git restore file-name</strong> : to discard changes in the working tree, so “file-name” 
					will go back to the state before we made any changes.
				</li>
			</UList>

			<H4>2.3.3. git revert</H4>
			<P>
				The <strong>git revert</strong> command can be considered an 'undo' type command, but instead of 
				removing the commit from the project history, it figures out how to invert the changes introduced 
				by the commit and appends a new commit with the resulting inverse content. This prevents Git from 
				losing history, which is important for the integrity of your revision history and for reliable 
				collaboration.
			</P>
			<P>
				After reverting a commit, the HEAD will point to the new “revert commit” making it the tip 
				of the branch.
			</P>
			<P>
				Example of using git revert: if we’re tracking down a bug and find that it was introduced by a 
				single commit. Instead of manually fixing it, and committing a new snapshot, we can 
				use <strong>git revert</strong> to automatically do all of this for us.
			</P>
		</Main>
	)
}