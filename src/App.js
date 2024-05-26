import { Routes, Route } from "react-router-dom";
import GitDoc from "./components/content/Git-doc/GitDoc";
import {
  // Git chapter 1 imports
  GitCh1, GitCh1Page1, GitCh1Page2, 
  // Git chapter 2 imports
  GitCh2, GitCh2Page1, GitCh2Page2, GitCh2Page3, GitCh2Page4, GitCh2Page5,
  GitCh2Page6, GitCh2Page7, GitCh2Page8, GitCh2Page9, GitCh2Page10, GitCh2Page11, GitCh2Page12, GitCh2Page13,
  GitCh2Page14, GitCh2Page15
} 
  from "./components/content/Git-doc/ExportPages";
import {ToggleNavbarProvider} from "./context/navbarContext";

function App() {
  /* when we make the screen small and then toggle the leftNavbar to take full screen, then we make the 
  screen big again, the leftNavbar will still take the whole screen. Fix it.
  This can't be done with Tailwind, so I have to use React
  There is a solution here: https://www.altcademy.com/blog/how-to-check-screen-width-in-reactjs/
  Check useEffect.
  */
 /* When we click on a Link, the navbar should close, this is important for small screens 
 we go to the "ChapterTitle.js" and "AccordionItem.js" where the <Link>s are, and give the <Link>s an
 onClick event handler that do: "setToggleNavbar( !toggleNavbar )"
 But In "Main.js" when we tag the navbar in small screens the <Main> will close, so now even when we click
 a Link zin big screen the Main will still close. For that we need a condition that tells us when the screen
 is small, so <Main> will only close where the screen in small + the navbar is toggled.
 */

  // When we click on a link we should be taken to the top of the page, not the place of wherever we were 
  // scrolling before

/*
Connect to a database, and add the doc as Headers, Paragraphs, Lists and Images to the database, then fetch it
from this app, and make the website dynamic. Then we fill the rest of the doc and the other docs.
*/
  return (
    <ToggleNavbarProvider>
      <div className="bg-zinc-800 text-white min-h-screen pt-12">
        <Routes>
          <Route exact path='/' element={<GitDoc />} />
          {/* Git's Chapter 1 */}
          <Route path='/git-ch1' element={<GitCh1 />} />
          <Route path='/git-ch1-p1' element={<GitCh1Page1 />} />
          <Route path='/git-ch1-p2' element={<GitCh1Page2 />} />
          {/* Git's Chapter 2 */}
          <Route path='/git-ch2' element={<GitCh2 />} />
          <Route path='/git-ch2-p1' element={<GitCh2Page1 />} />
          <Route path='/git-ch2-p2' element={<GitCh2Page2 />} />
          <Route path='/git-ch2-p3' element={<GitCh2Page3 />} />
          <Route path='/git-ch2-p4' element={<GitCh2Page4 />} />
          {/* <Route path='/git-ch2-p5' element={<GitCh2Page5 />} />
          <Route path='/git-ch2-p6' element={<GitCh2Page6 />} />
          <Route path='/git-ch2-p7' element={<GitCh2Page7 />} />
          <Route path='/git-ch2-p8' element={<GitCh2Page8 />} />
          <Route path='/git-ch2-p9' element={<GitCh2Page9 />} />
          <Route path='/git-ch2-p10' element={<GitCh2Page10 />} />
          <Route path='/git-ch2-p11' element={<GitCh2Page11 />} />
          <Route path='/git-ch2-p12' element={<GitCh2Page12 />} />
          <Route path='/git-ch2-p13' element={<GitCh2Page13 />} />
          <Route path='/git-ch2-p14' element={<GitCh2Page14 />} /> */}
        </Routes>
      </div>
    </ToggleNavbarProvider>
  );
}

export default App;
