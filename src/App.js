import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Basket from './pages/Basket';
import Mypage from './pages/Mypage';
import Payment from './pages/Payment';

function App() {
  return (
    /*페이지 연결을 위한 라우터
      Routers for connecting to pages*/
    <BrowserRouter basename="secondary_shop">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
