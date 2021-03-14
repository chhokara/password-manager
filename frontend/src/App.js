import React from "react";
import { WebsiteForm } from "./components/WebsiteForm";
import { Container } from "semantic-ui-react";
import "./App.css";
import { Websites } from "./components/Websites";

function App() {
  return (
    <div className="App">
      <Container style={{ width: "70%" }}>
        <WebsiteForm />
      </Container>
      <Container style={{ width: "40%" }}>
        <Websites />
      </Container>
    </div>
  );
}

export default App;
