import { Container } from '@material-ui/core';
import React from 'react';
import UserRegistrationForm from './UserRegistrationForm';
import UsersTable from './UsersTable';


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

        <UsersTable />
      </Container>
    );
}

export default UserRegistration;
