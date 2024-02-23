import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Store from './components/Store/Store';
import About from './components/About/About';
import Faq from './components/Faq/Faq';
import Payment from './components/Payment/Payment';
import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='store' element={<Store />} />
          <Route path='about' element={<About />} />
          <Route path='faq' element={<Faq />} />
          <Route path='payment' element={<Payment />} />
          <Route path='*' element={<Outlet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}