import { useState } from "react";
import GitNavbar from "./components/content/Git-doc/GitNavbar";
import VersionControl from "./components/content/Git-doc/VersionControl";
import TopNavbar from "./components/top-navbar/TopNavbar";

function App() {
  const [toggleNavbar, setToggleNavbar] = useState(false)
  console.log(toggleNavbar)

  return (
    <div className="bg-zinc-800 text-white min-h-screen">
      <div className="bg-yellow-300 pt-12 lg:ml-80 flex justify-center">
        <VersionControl />
      </div>
      <GitNavbar toggleNavbar={toggleNavbar} />
      <TopNavbar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar} />
    </div>
  );
}

export default App;
