import {Main, Paragraph, H2, H3, H4, H5, UList, OList} from "../../main/MainExports";

export default function VersionControl(){
	return (
		<Main>
			<H2>Version control</H2>
			<Paragraph>
				Version control is the management of changes to documents, computer programs, large websites and other 
				collection of information.
				<UList>
					<li>Unordered list item 1</li>
					<li>Unordered list item 2</li>
					<li>Unordered list item 3</li>
					<li>Unordered list item 4</li>
				</UList>
			</Paragraph>
			<H3>Version control</H3>
			<Paragraph>
				Version control is the management of changes to documents, computer programs, large websites and other 
				collection of information.
				<OList>
					<li>
						Ordered list item 1Ordered list item 1Ordered list item 1Ordered list item 1Ordered list item 1
						Ordered list item 1Ordered list item 1Ordered list item 1Ordered list item 1Ordered list item 1
						Ordered list item 1Ordered list item 1Ordered list item 1Ordered list item 1
					</li>
					<li>Ordered list item 2</li>
					<li>Ordered list item 3</li>
					<li>Ordered list item 4</li>
				</OList>
			</Paragraph>
			<H4>Version control</H4>
			<Paragraph>
				Version control is the management of changes to documents, computer programs, large websites and other 
				collection of information.
				<code>
					ref.current = 5;
					console.log(ref.current); // 5
				</code>
			</Paragraph>
			<H5>Version control</H5>
			<Paragraph>
				Version control is the management of changes to documents, computer programs, large websites and other 
				collection of information.
			</Paragraph>
		</Main>
	)
}