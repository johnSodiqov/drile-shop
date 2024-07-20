import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ItemPage } from './components/ItemPage/ItemPage';
import { Cart } from './components/Cart/Cart';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { Products } from './components/Products/Products';
import { AboutPage } from './components/About Page/AboutPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  element={<App />} >
          <Route index path='/' element={<Home />} />
          <Route path='item' element={<ItemPage />} />
          <Route path='products' element={<Products/>} />
          <Route path='cart' element={<Cart />} />
          <Route path='about' element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
