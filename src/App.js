import { useState } from "react";
import LeftNavbar from "./components/doc-left-navbar/LeftNavbar";
import VersionControl from "./components/doc-content/VersionControl";
import TopNavbar from "./components/doc-top-navbar/TopNavbar";

function App() {
  const [toggleNavbar, setToggleNavbar] = useState(false)
  console.log(toggleNavbar)

  return (
    <div className="bg-zinc-800 text-white min-h-screen">
      <div className="bg-yellow-300 pt-12 lg:ml-80 flex justify-center">
        <VersionControl />
      </div>
      <LeftNavbar toggleNavbar={toggleNavbar} />
      <TopNavbar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar} />
    </div>
  );
}

export default App;
