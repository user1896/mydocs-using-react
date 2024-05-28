import {Main, P, H2, H3, H4, H5, UList, OList, Img} from "../../../main/ExportsMain";

export default function Title2(){
	return (
		<Main>
			<H3>2.2. Remote</H3>
			<P>
				The <strong>git</strong> remote command lets you create, view, and delete connections to other 
				repositories. Remote connections are more like bookmarks rather than direct links into other 
				repositories, so instead of providing real-time access to another repository, they serve as names 
				that can be used to reference the URLs. For example we use the reference <strong>origin</strong> instead
				of the full URL of our central repo.
			</P>
			<P>
				A remote can also be a link to a fork within Github, or a repo on a coworker system, and it can even 
				be another directory on our same local system.
			</P>
			<P>
				The <strong>git remote</strong> command is essentially an interface for managing a list of remote entries that are 
				stored in the repository's <strong>./.git/config</strong> file.
			</P>

			<H4>2.2.1. Viewing git remote configurations</H4>
			<UList>
				<li>
					<strong>git remote</strong>: List the remote connections you have to other repositories.
				</li>
				<li>
					<strong>git remote -v</strong>: Same as the above command, but include the URL of each connection. 
					The <strong>-v</strong> option stands for "verbose" (مطول)
				</li>
				<li>
					<strong>git remote get-url "name"</strong>: Outputs the URL of "name".
				</li>
				<li>
					<strong>git remote show "name"</strong>: Outputs high-level information about the 
					remote "name".
				</li>
			</UList>

			<H4>2.2.2. Creating and modifying git remote configurations</H4>
			<UList>
				<li>
					<strong>git remote add "name" "url"</strong>: Create a new connection to a remote repository. 
					After adding a remote, you’ll be able to use "name" as a convenient shortcut 
					for "url" in other Git commands.
				</li>
				<li>
					<strong>git remote rm "name"</strong>: Remove the connection to the remote repository 
					called "name".
				</li>
				<li>
					<strong>git remote remove "name"</strong>: (same as the above command)
				</li>
				<li>
					<strong>git remote rename "old-name" "new-name"</strong>: Rename a remote connection from 
					"old-name" to "new-name".
				</li>
				<li>
					<strong>git remote prune "name"</strong>: (prune == تقليم) Deletes any local branches for 
					"name" that are not present on the remote repository. Accepts a <strong>--dry-run</strong> option 
					which will list	what branches are set to be pruned, but will not actually prune them.
				</li>
			</UList>
			<P>
				The result of the previous commands can also be achieved by directly editing 
				the <strong>./.git/config</strong> file with a text editor.
			</P>
			
			<H4>2.2.3. Git remote discussion</H4>
			<P>
				When you clone a repository with <strong>git clone</strong>, it automatically creates a remote 
				connection called <strong>origin</strong> pointing back to the cloned repository. This behavior 
				is also why most Git-based projects call their central repository <strong>origin</strong>.
			</P>
			<P>
				If you and your friend Adel are working on the same project and your friend maintained a publicly 
				accessible repository on dev.example.com/adel.git (that he forked from the central repo), you could 
				add a connection as follows:
				<br />
				<strong>git remote add adel http://dev.example.com/adel.git</strong>
			</P>
			<P>
				Having this kind of access to individual developers’ repositories makes it possible to collaborate 
				outside of the central repository (I see the changes he made and I can pull them or even push to 
				his repo if he gives me the access to do so, and we do all this without affecting the central repo). 
				This can be very useful for small teams working on a large project.
			</P>
		</Main>
	)
}