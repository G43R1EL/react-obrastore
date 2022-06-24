import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { CartContextProvider } from './context/CartContext/CartContext';

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
