import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="secondary_shop">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
