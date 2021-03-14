import React from "react";
import { WebsiteForm } from "./components/WebsiteForm";
import { Container } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <WebsiteForm />
      </Container>
    </div>
  );
}

export default App;
