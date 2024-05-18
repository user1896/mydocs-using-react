import { useState } from "react";
import GitNavbar from "./components/content/Git-doc/GitNavbar";
import VersionControl from "./components/content/Git-doc/VersionControl";
import TopNavbar from "./components/top-navbar/TopNavbar";

function App() {
  const [toggleNavbar, setToggleNavbar] = useState(false)
  console.log(toggleNavbar)

  return (
    <div className="bg-zinc-800 text-white min-h-screen">
      <VersionControl toggleNavbar={toggleNavbar} />
      <GitNavbar toggleNavbar={toggleNavbar} />
      <TopNavbar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar} />
    </div>
    /* create a single page that holds all pages of a single document in one web page, so we can search for 
    a word with "ctr+f" */
  );
}

export default App;
