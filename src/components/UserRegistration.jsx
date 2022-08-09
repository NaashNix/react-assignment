import { Container } from '@material-ui/core';
import React from 'react';
import UserRegistrationForm from './UserRegistrationForm';


const UserRegistration = () => {
    return (
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <h2>Cart Manage</h2>
        </div>
        <UserRegistrationForm />
      </Container>
    );
}

export default UserRegistration;
