import { Routes } from "react-router-dom";
import GitNavbar from "./components/content/Git-doc/GitNavbar";
import TopNavbar from "./components/top-navbar/TopNavbar";
import GitDoc from "./components/content/Git-doc/GitDoc";
import FullChapter1 from "./components/content/Git-doc/chapter-1/FullChapter";
import FullChapter2 from "./components/content/Git-doc/chapter-2/FullChapter";
import {ToggleNavbarProvider} from "./context/navbarContext";

function App() {
  /* when we make the screen small and then toggle the leftNavbar to take full screen, then we make the 
  screen big again, the leftNavbar will still take the whole screen. Fix it.
  This can't be done with Tailwind, so I have to use React
  There is a solution here: https://www.altcademy.com/blog/how-to-check-screen-width-in-reactjs/
  Check useEffect.
  */


  /* all accordions should share the same state, when one of them gets expanded, the other shrinks */
  return (
    <ToggleNavbarProvider>
      <div className="bg-zinc-800 text-white min-h-screen pt-12">
        {/* <GitDoc/>
        <GitNavbar/>
        <TopNavbar setToggleNavbar={setToggleNavbar} /> */}
        <FullChapter1 />
      </div>
    </ToggleNavbarProvider>
    /* create a single page that holds all pages of a single document in one web page, so we can search for 
    a word with "ctr+f" */
  );
}

export default App;
