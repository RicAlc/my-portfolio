import Header from "./components/Header";
import Introduction from "./components/Introduction";
import LatestWork from "./components/LatestWork";
import Volumen from "./components/Volumen";

function App() {
  return (
    <div className='App'>
      <Header />
      <Introduction />
      <Volumen />
      <LatestWork />
      <Volumen />
    </div>
  );
}

export default App;
