import React, { useEffect, useState } from "react";
import { WebsiteForm } from "./components/WebsiteForm";
import { Container } from "semantic-ui-react";
import "./App.css";
import { Websites } from "./components/Websites";

function App() {
  const [websites, setWebsites] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    fetch("/display_data").then((response) =>
      response.json().then((data) => {
        setWebsites(data.data);
      })
    );
  }, []);
  return (
    <div className="App">
      <Container style={{ width: "70%" }}>
        <WebsiteForm
          onNewWebsite={(website) =>
            setWebsites((currentWebsites) => [...currentWebsites, website])
          }
          id={id}
        />
      </Container>
      <Container style={{ width: "40%" }}>
        <Websites sites={websites} setId={setId} />
      </Container>
    </div>
  );
}

export default App;
