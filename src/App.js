import { Routes, Route } from "react-router-dom";
import GitDoc from "./components/content/Git-doc/GitDoc";
import Chapter1Page from "./components/content/Git-doc/chapter-1/full-chapter/Page";
import Chapter2Page from "./components/content/Git-doc/chapter-2/full-chapter/Page";
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
        <Routes>
          <Route exact path='/' element={<GitDoc />} />
          <Route path='/1' element={<Chapter1Page />} />
          <Route path='/2' element={<Chapter2Page />} />
        </Routes>
      </div>
    </ToggleNavbarProvider>
  );
}

export default App;
