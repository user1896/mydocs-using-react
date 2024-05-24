import { Routes, Route } from "react-router-dom";
import GitDoc from "./components/content/Git-doc/GitDoc";
import {Ch1, Ch1Page1, Ch1Page2, Ch2, Ch2Page1, Ch2Page2} from "./components/content/Git-doc/ExportPages";
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
  return (
    <ToggleNavbarProvider>
      <div className="bg-zinc-800 text-white min-h-screen pt-12">
        <Routes>
          <Route exact path='/' element={<GitDoc />} />
          {/* Chapter 1 */}
          <Route path='/1' element={<Ch1 />} />
          <Route path='/1p1' element={<Ch1Page1 />} />
          <Route path='/1p2' element={<Ch1Page2 />} />
          {/* Chapter 2 */}
          <Route path='/2' element={<Ch2 />} />
          <Route path='/2p1' element={<Ch2Page1 />} />
          <Route path='/2p2' element={<Ch2Page2 />} />
        </Routes>
      </div>
    </ToggleNavbarProvider>
  );
}

export default App;
