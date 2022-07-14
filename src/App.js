import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import LatestWork from "./components/LatestWork";

function App() {
  return (
    <div className='App'>
      <Header />
      <Introduction />
      <AboutMe />
      <LatestWork />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
