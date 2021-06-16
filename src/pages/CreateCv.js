import React from "react";
import { Button, Form, Input, TextArea } from "semantic-ui-react";

export default function CreateCv() {
  return (
    <div>
      <Form
        style={{
          width: "600px",
          margin: "0 auto",
          border: "3px solid white",
          padding: "10px",
          borderRadius: "15px",
        }}
      >
        <Form.Field
          id="form-input-control-first_name"
          control={Input}
          label="First name"
          placeholder="First name"
        />
        <Form.Field
          id="form-input-control-last_name"
          control={Input}
          label="Last name"
          placeholder="Last name"
        />
        <Form.Field
          id="form-input-control-linkedin_address"
          control={Input}
          label="Linkedin Address"
          placeholder="Linkedin Address"
        />
        <Form.Field
          id="form-input-control-github_address"
          control={Input}
          label="Github Address"
          placeholder="Github Address"
        />

        <Form.Field
          id="form-input-control-education"
          control={Input}
          label="Education"
          placeholder="Education"
        />

        <Form.Field
          id="form-input-control-language"
          control={Input}
          label="Language"
          placeholder="Language"
        />
        <Form.TextArea label="About" placeholder="Tell us more about you..." />

        <Form.Field
          color="violet"
          id="form-button-control-public"
          control={Button}
          content="Create"
        />
      </Form>
    </div>
  );
}

