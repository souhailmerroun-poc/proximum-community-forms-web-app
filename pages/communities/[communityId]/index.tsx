import type { NextPage } from "next";
import { Breadcrumb, Container, ListGroup, Row } from "react-bootstrap";
import UINavbar from "../../../src/ui/UINavbar";

const CommunitiesShow: NextPage = () => {
  return (
    <div>
      <UINavbar />
      <Container>
        <Row>
          <h1>Community Name</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Communities</Breadcrumb.Item>
            <Breadcrumb.Item active href="#">Name</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
          <ListGroup>
            <ListGroup.Item action>
              Webinars
            </ListGroup.Item>
            <ListGroup.Item action>
              Forms
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
    </div>
  );
};

export default CommunitiesShow;
