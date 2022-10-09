import type { NextPage } from "next";
import {
  Breadcrumb,
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";
import UINavbar from "../../../../src/ui/UINavbar";

const FormsIndex: NextPage = () => {
  return (
    <div>
      <UINavbar />
      <Container>
        <Row>
          <h1>Create a form</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Communities</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Name</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Forms</Breadcrumb.Item>
            <Breadcrumb.Item active href="#">
              Create
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Select>
                  <option value="1">short_text</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit">
                Add field
              </Button>
            </Form>
          </Col>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Full name</td>
                  <td>short_text</td>
                </tr>
              </tbody>
            </Table>
            <Button variant="primary" type="submit">
              Create form
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormsIndex;
