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
