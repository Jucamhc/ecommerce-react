import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import CheckoutCard from './components/CheckoutCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { useEffect } from 'react';
import Checkout from './components/CheckoutForm/Checkout';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='' element={<Products />} />
          <Route path='/ecommerce-react' element={<Products />} />
          <Route path='/checkout-page' element={<CheckoutPage />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
