import React from "react";
import Routes from "./routes";
const App = () => (
  <Container>
    <Routes />
  </Container>
);

export default App;

const Container = ({ children }) => <div style={{ maxWidth: 1280, margin: "auto" }}>{children}</div>;
