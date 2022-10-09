import type { NextPage } from "next";
import { Breadcrumb, Container, ListGroup, Row, Table } from "react-bootstrap";
import UINavbar from "../../../../src/ui/UINavbar";

const FormsIndex: NextPage = () => {
  return (
    <div>
      <UINavbar />
      <Container>
        <Row>
          <h1>Forms</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Communities</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Name</Breadcrumb.Item>
            <Breadcrumb.Item active href="#">
              Forms
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Fields</th>
                <th>URL</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UUID</td>
                <td>Registration</td>
                <td>See details</td>
                <td>url</td>
                <td>delete</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
};

export default FormsIndex;
