import { Container, Typography } from "@material-ui/core";
import React from "react";

const Login = () => {
  return (
    <Container
      style={{
        backgroundColor: "pink",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          padding:"3rem",
          margin:"1rem"
        }}
      >
        <Typography variant="h1" gutterBottom>
          LOGIN
        </Typography>
      </div>
    </Container>
  );
};

export default Login;
