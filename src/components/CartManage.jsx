import { Button, Container } from '@material-ui/core';
import React from 'react';
import CartManageForm from './CartManageForm';
import './Styles/CartManage.css';
import "./Styles/ProductManage.css";


const CartManage = () => {
    return (
      <div>
        <Container className="productManage__container">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <h1>User Registration</h1>
          </div>

          <CartManageForm />
          
        </Container>
        
      </div>
    );
}

export default CartManage;
