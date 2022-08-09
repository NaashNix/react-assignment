// import logo from './logo.svg';
import React from 'react'
import './App.css';
import CartManage from './components/CartManage';
// import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProductManage from './components/ProductManage';


function App() {

  return (

    <div className="App">
        {/* <Login />     */}
        {/* <Dashboard /> */}
        {/* <ProductManage /> */}
        <CartManage />
    </div>
  );
}

export default App;
