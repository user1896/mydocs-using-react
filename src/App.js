import Navbar from "./components/doc-navbar/Navbar";
import VersionControl from "./components/doc-content/VersionControl";

function App() {
  return (
    <div className="bg-zinc-800 text-white min-h-screen">
      <Navbar></Navbar>
      <VersionControl />
    </div>
  );
}

export default App;
