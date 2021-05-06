import React, { useEffect, useState } from "react";
import { WebsiteForm } from "./components/WebsiteForm";
import { Container } from "semantic-ui-react";
import "./App.css";
import { Websites } from "./components/Websites";

function App() {
  const [websites, setWebsites] = useState([]);
  const [id, setId] = useState(0);
  const [oldWebsite, setOldWebsite] = useState("");
  const [oldPassword, setOldPassword] = useState("");

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
          setOldPassword={setOldPassword}
          setOldWebsite={setOldWebsite}
          oldPassword={oldPassword}
          oldWebsite={oldWebsite}
          onNewWebsite={(website) =>
            setWebsites((currentWebsites) => [...currentWebsites, website])
          }
          id={id}
          onDeleteWebsite={(websiteId) => {
            setWebsites((currentWebsites) => {
              let newWebsites = currentWebsites.filter(
                (website, i) => websiteId !== i
              );
              return [...newWebsites];
            });
          }}
        />
      </Container>
      <Container style={{ width: "40%" }}>
        <Websites
          sites={websites}
          setId={setId}
          setOldPassword={setOldPassword}
          setOldWebsite={setOldWebsite}
        />
      </Container>
    </div>
  );
}

export default App;
