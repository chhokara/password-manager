import React, { useState } from "react";
import { Form, Card, Input, Button } from "semantic-ui-react";

export const WebsiteForm = ({ onNewWebsite, onDeleteWebsite, id }) => {
  const [website, setSite] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Card style={{ marginTop: "30px", backgroundColor: "#f7f7f7" }} fluid>
      <Card.Content>
        <Form style={{ margin: "5px" }}>
          <Form.Field>
            <Input
              placeholder="Website"
              value={website}
              onChange={(e) => setSite(e.target.value)}
            ></Input>
          </Form.Field>
        </Form>
        <Form style={{ margin: "5px" }}>
          <Form.Field>
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </Form.Field>
        </Form>
        <Button
          primary
          style={{ margin: "5px 50px 5px 50px" }}
          onClick={async () => {
            const site = { website, password };
            const response = await fetch("/add_data", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(site),
            });

            if (response.ok) {
              onNewWebsite(site);
              setSite("");
              setPassword("");
            }
          }}
        >
          Add
        </Button>
        <Button secondary style={{ margin: "5px 50px 5px 50px" }}>
          Update
        </Button>
        <Button
          style={{ margin: "5px 50px 5px 50px" }}
          onClick={async () => {
            console.log(id);
            const response = await fetch(`/delete/${id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (response.ok) {
              onDeleteWebsite(id);
            }
          }}
        >
          Delete
        </Button>
      </Card.Content>
    </Card>
  );
};
