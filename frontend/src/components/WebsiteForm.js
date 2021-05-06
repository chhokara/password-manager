import React, { useState, useEffect } from "react";
import { Form, Card, Input, Button } from "semantic-ui-react";

export const WebsiteForm = ({
  setOldPassword,
  setOldWebsite,
  oldWebsite,
  oldPassword,
  onNewWebsite,
  onDeleteWebsite,
  id,
}) => {
  const [website, setSite] = useState(oldWebsite);
  const [password, setPassword] = useState(oldPassword);

  useEffect(() => {
    setSite(oldWebsite);
    setPassword(oldPassword);
  }, [oldPassword, oldWebsite]);
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
              setOldPassword("");
              setOldWebsite("");
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
              setSite("");
              setPassword("");
              setOldPassword("");
              setOldWebsite("");
            }
          }}
        >
          Delete
        </Button>
      </Card.Content>
    </Card>
  );
};
