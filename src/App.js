// import logo from './logo.svg';
import React from 'react';
import './App.css';
import CartManage from './components/CartManage';
import Dashboard from './components/Dashboard';
import ProductManage from './components/ProductManage';
import UserRegistration from './components/UserRegistration';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './components/Login';


function App() {

  return (
    // <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="register" element={<UserRegistration />} />
        <Route exact path="dashboard" element={<Dashboard />} />
        <Route exact path="products" element={<ProductManage />} />
        <Route path="cart" element={<CartManage />} />
      </Routes>
    // </Router>
    // <div className="App">
    //     {/* <Login />     */}
    //     {/* <Dashboard /> */}
    //     {/* <ProductManage /> */}
    //     {/* <CartManage /> */}
    //     {/* <UserRegistration /> */}
    // </div>
  );
}

export default App;
