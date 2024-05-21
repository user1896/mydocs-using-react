import { useState } from "react";
import { Routes } from "react-router-dom";
import GitNavbar from "./components/content/Git-doc/GitNavbar";
import TopNavbar from "./components/top-navbar/TopNavbar";
import GitDoc from "./components/content/Git-doc/GitDoc";
import toggleNavbarContext from "./context/navbarContext";

function App() {
  const [toggleNavbar, setToggleNavbar] = useState(false)
  console.log(toggleNavbar)
  /* when we make the screen small and then toggle the leftNavbar to take full screen, then we make the 
  screen big again, the leftNavbar will still take the whole screen. Fix it.
  This can't be done with Tailwind, so I have to use React
  There is a solution here: https://www.altcademy.com/blog/how-to-check-screen-width-in-reactjs/
  Check useEffect.
  */


  /* all accordions should share the same state, when one of them gets expanded, the other shrinks */
  return (
    <toggleNavbarContext.Provider value={toggleNavbar} >
        <div className="bg-zinc-800 text-white min-h-screen pt-12">
          <GitDoc/>
          <GitNavbar/>
          <TopNavbar setToggleNavbar={setToggleNavbar} />
        </div>
    </toggleNavbarContext.Provider>
    /* create a single page that holds all pages of a single document in one web page, so we can search for 
    a word with "ctr+f" */
  );
}

export default App;
