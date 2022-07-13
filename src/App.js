import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import LatestWork from "./components/LatestWork";
import Volumen from "./components/Volumen";

function App() {
  return (
    <div className='App'>
      <Header />
      <Introduction />
      <AboutMe />
      <LatestWork />
      <Volumen />
      <Footer />
    </div>
  );
}

export default App;
