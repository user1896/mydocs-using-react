import LeftNavbar from "./components/doc-left-navbar/LeftNavbar";
import VersionControl from "./components/doc-content/VersionControl";
import TopNavbar from "./components/doc-top-navbar/TopNavbar";

function App() {
  return (
    <div className="bg-zinc-800 text-white min-h-screen">
      <TopNavbar />
      <LeftNavbar />
      <VersionControl />
    </div>
  );
}

export default App;
