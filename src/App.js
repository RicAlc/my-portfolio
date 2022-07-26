import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { Main } from './routes/Main';
import { PageNotFound } from './routes/PageNotFound';
import { Portfolio } from './routes/Portfolio';
import { ThankYou } from './routes/ThankYou';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/thankyou' element={<ThankYou />} />
        <Route path='/portfolio' element={<Portfolio />} />

        <Route path='*' element={<Navigate to='/page-not-found' replace />} />
        <Route path='/page-not-found' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
