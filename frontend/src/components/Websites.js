import React from "react";
import { List, Card } from "semantic-ui-react";
import "../styles/Card.css";

export const Websites = ({ sites, setId, setOldPassword, setOldWebsite }) => {
  return (
    <List>
      {sites.map((website, i) => {
        return (
          <List.Item
            className="card-item"
            key={i}
            onClick={(e) => {
              setId(i);
              setOldPassword(website.password);
              setOldWebsite(website.website);
            }}
          >
            <Card
              className="card"
              style={{
                backgroundColor: "#f7f7f7",
                boxShadow: "0px 5px 5px lightgrey",
              }}
              fluid
            >
              <Card.Content>
                <Card.Header content={website.website} />
                <Card.Description content={`Password: ${website.password}`} />
              </Card.Content>
            </Card>
          </List.Item>
        );
      })}
    </List>
  );
};
