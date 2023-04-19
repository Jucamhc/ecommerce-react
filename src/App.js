import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import CheckoutCard from './components/CheckoutCard';

function App() {
  return (
    <div className="App">
    
      <Navbar/>
       <CheckoutPage/>
      {/* <CheckoutCard/> */}
      {/* <Products/> */}
     {/*  <Product/> */}
    </div>
  );
}

export default App;
