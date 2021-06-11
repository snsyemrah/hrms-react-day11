import React, {useState, useEffect} from 'react'
import { Container, Table, Header, Button } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    
    useEffect(() => {
      let employerService = new EmployerService(); 
      employerService.getEmployers().then((result)=> setEmployers(result.data.data));
      
      
    }, [])
 
    return (
        <Container>
        <Header as="h2" color="violent">
          Employers List
        </Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Employer</Table.HeaderCell>
              <Table.HeaderCell>Web Address</Table.HeaderCell>
              <Table.HeaderCell>Phone Number</Table.HeaderCell>
              <Table.HeaderCell>Details</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {employers.map((employer) => (
              <Table.Row key={employer.id}>
                <Table.Cell>{employer.companyName}</Table.Cell>
                <Table.Cell>{employer.webAddress}</Table.Cell>
                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                <Table.Cell>
                  {" "}
                  <Button basic color="violet">
                    View
                  </Button>
                </Table.Cell>
              </Table.Row> 
            ))}
          </Table.Body>
        </Table>
      </Container>
    )
}
