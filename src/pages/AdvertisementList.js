import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Label, Table, Header, Button } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function AdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  let jobAdvertisementService = new JobAdvertisementService();
  useEffect(() => {
    jobAdvertisementService
      .getJobAdvertisement()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);
  return (
    <Container>
      <Header as="h2" color="violent">
        Job Advertisements List
      </Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.jobPosition.position}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
              <Table.Cell>
                {" "}
                <Button basic color="violet" as={NavLink} to="/advertisements-view">
                  View 
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}
