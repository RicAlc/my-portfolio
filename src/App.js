import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Main } from "./routes/Main";
import { ThankYou } from "./routes/ThankYou";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/thankyou' element={<ThankYou />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
