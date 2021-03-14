import React from "react";
import { Form, Card, Input, Button } from "semantic-ui-react";

export const WebsiteForm = () => {
  return (
    <Card style={{ marginTop: "30px", backgroundColor: "#f7f7f7" }} fluid>
      <Card.Content>
        <Form style={{ margin: "5px" }}>
          <Form.Field>
            <Input placeholder="Website"></Input>
          </Form.Field>
        </Form>
        <Form style={{ margin: "5px" }}>
          <Form.Field>
            <Input placeholder="Password"></Input>
          </Form.Field>
        </Form>
        <Button primary style={{ margin: "5px" }}>
          Add
        </Button>
        <Button secondary style={{ margin: "5px" }}>
          Update
        </Button>
        <Button style={{ margin: "5px" }}>Delete</Button>
      </Card.Content>
    </Card>
  );
};
