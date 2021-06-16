import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";

// const options = [
//   { key: "a", text: "Ankara", value: "ankara" },
//   { key: "i", text: "İzmit", value: "izmit" },
//   { key: "i", text: "İstanbul", value: "istanbul" },
// ];

const options2 = [
  { key: "r", text: "Remote", value: "remote" },
  { key: "o", text: "On-Site", value: "on-site" },
];

const options3 = [
  { key: "f", text: "Full-time", value: "full-time" },
  { key: "o", text: "Part-time", value: "part-time" },
];

export default function AdvertisementAdd() {
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  let cityService = new CityService();
  let jobPositionService = new JobPositionService();
  useEffect(() => {
    cityService.getCities().then((result) => {
      const cityOptions = result?.data?.data.map(({ id, cityName }) => ({
        key: String(id),
        text: cityName,
        value: id,
      }));
      setCities(cityOptions);
    });
  }, []);

  useEffect(() => {
    jobPositionService.getJobPositions().then((result) => {
      const jobPositionOptions = result?.data?.data.map(({ id, position }) => ({
        key: String(id),
        text: position,
        value: id,
      }));
      setJobPositions(jobPositionOptions);
    });
  }, []);

  return (
    <div>
      <Form
        style={{
          width: "800px",
          margin: "0 auto",
          //border: "3px solid white",
          padding: "10px",
          // borderRadius: "15px",
        }}
      >
        <Form.Field>
          <label>Company Name</label>
          <input placeholder="Company Name" />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Deadline</label>
            <input placeholder="Deadline" />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input placeholder="Description" />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Min Salary</label>
            <input placeholder="Min Salary" />
          </Form.Field>
          <Form.Field>
            <label>Max Salary</label>
            <input placeholder="Max Salary" />
          </Form.Field>
          <Form.Field>
            <label>Number Of Open Position</label>
            <input placeholder="Number Of Open Position" />
          </Form.Field>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Select
            fluid
            label="Work Time"
            options={options3}
            placeholder="Work Time"
          />
          <Form.Select
            fluid
            label="Job Type"
            options={options2}
            placeholder="Job Type"
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Select fluid label="Job Position" placeholder="Job Position"  options={jobPositions}/>

          <Form.Select fluid label="City" options={cities} placeholder="City" />
        </Form.Group>
        <Form.Field style={{ marginTop: "250px" }}>
          <Button color="violet" type="submit">
            Send
          </Button>
        </Form.Field>
      </Form>
    </div>
  );
}
