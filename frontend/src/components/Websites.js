import React from "react";
import { List, Card } from "semantic-ui-react";

export const Websites = () => {
  const websites = [
    { name: "LinkedIn", password: "chhokara" },
    { name: "Facebook", password: "arshdeep" },
    { name: "Youtube", password: "starbz" },
    { name: "Youtube", password: "starbz" },
    { name: "Youtube", password: "starbz" },
    { name: "Youtube", password: "starbz" },
    { name: "Youtube", password: "starbz" },
  ];
  return (
    <List>
      {websites.map((website, i) => {
        console.log(i);
        return (
          <List.Item style={{ marginTop: "30px" }} key={i}>
            <Card
              style={{
                backgroundColor: "#f7f7f7",
                boxShadow: "5px 5px lightgrey",
              }}
              fluid
            >
              <Card.Content>
                <Card.Header content={website.name} />
                <Card.Description content={`Password: ${website.password}`} />
              </Card.Content>
            </Card>
          </List.Item>
        );
      })}
    </List>
  );
};
