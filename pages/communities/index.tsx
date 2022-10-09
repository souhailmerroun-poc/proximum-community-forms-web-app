import type { NextPage } from "next";
import { Breadcrumb, Container, ListGroup, Row } from "react-bootstrap";
import UINavbar from "../../src/ui/UINavbar";

const CommunitiesIndex: NextPage = () => {
  return (
    <div>
      <UINavbar />
      <Container>
        <Row>
          <h1>Communities</h1>
        </Row>
        <Row>
          <ListGroup>
            <ListGroup.Item action>Link 1</ListGroup.Item>
            <ListGroup.Item action>Link 1</ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
    </div>
  );
};

export default CommunitiesIndex;
