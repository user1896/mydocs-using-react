import { useState } from "react";
import GitNavbar from "./components/content/Git-doc/GitNavbar";
import TopNavbar from "./components/top-navbar/TopNavbar";
import FullChapter1 from "./components/content/Git-doc/chapter-1/FullChapter";
import FullChapter2 from "./components/content/Git-doc/chapter-2/FullChapter";

function App() {
  const [toggleNavbar, setToggleNavbar] = useState(false)
  console.log(toggleNavbar)
  /* when we make the screen small and then toggle the leftNavbar to take full screen, then we make the 
  screen big again, the leftNavbar will still take the whole screen. Fix it */
  return (
    <div className="bg-zinc-800 text-white min-h-screen">
      <FullChapter1 toggleNavbar={toggleNavbar} />
      <FullChapter2 toggleNavbar={toggleNavbar} />
      <GitNavbar toggleNavbar={toggleNavbar} />
      <TopNavbar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar} />
    </div>
    /* create a single page that holds all pages of a single document in one web page, so we can search for 
    a word with "ctr+f" */
  );
}

export default App;
