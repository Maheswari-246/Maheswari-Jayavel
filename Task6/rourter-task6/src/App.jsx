import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="p-4 flex justify-between items-center bg-blue-100">
          <h1 className="text-xl font-bold">🛍 Fake Store</h1>
          <nav className="flex gap-4">
            <Link to="/">Products</Link>
            <Link to="/cart">Cart</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;