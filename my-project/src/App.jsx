import IntroScene from "./components/IntroScene";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
    return (
  <>
    <Navbar/>
     <IntroScene />
  <div className="relative" style={{ zIndex: 20 }}></div>
  <Home />
  </>
);
}

export default App;
