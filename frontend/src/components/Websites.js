import React from "react";
import { List, Card } from "semantic-ui-react";

export const Websites = ({ sites, setId }) => {
  return (
    <List>
      {sites.map((website, i) => {
        return (
          <List.Item
            style={{ marginTop: "30px" }}
            key={i + 1}
            onClick={(e) => setId(i + 1)}
          >
            <Card
              style={{
                backgroundColor: "#f7f7f7",
                boxShadow: "5px 5px lightgrey",
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
