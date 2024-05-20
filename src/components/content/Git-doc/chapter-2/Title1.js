import {Main, P, H2, H3, H4, H5, UList, OList, Img} from "../../../main/MainExports";
import img1 from "../images/ch2-img1.png";

export default function Title1({toggleNavbar}){
	return (
		<Main toggleNavbar={toggleNavbar} >
			<H2>2. What is Git?</H2>
			<P>
				Git is a distributed version control system that supports distributed non-linear workflows (a workflow 
				that “splits” into multiple “branches”, each of which is executed simultaneously and independently 
				from each other), it tracks changes in any set of computer files, usually used for coordinating work 
				among programmers collaboratively developing source code during software development.
			</P>
			<p>The architecture of Git :</p>
			<Img src={img1} />
			<H3>2.1. Initialise repository</H3>
			<UList>
				<li>
					<strong>git init</strong>: creates an empty Git repository or re-initializes an existing one. 
					It basically creates a .git directory with sub directories and template files.
				</li>
			</UList>
		</Main>
	)
}