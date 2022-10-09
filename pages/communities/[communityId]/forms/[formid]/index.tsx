import type { NextPage } from "next";
import { Breadcrumb, Container, ListGroup, Row, Table } from "react-bootstrap";
import UINavbar from "../../../../../src/ui/UINavbar";

const FormsShow: NextPage = () => {
  return (
    <div>
      <UINavbar />
      <Container>
        <Row>
          <h1>Forms id</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Communities</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Name</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Forms</Breadcrumb.Item>
            <Breadcrumb.Item active href="#">
              Form name
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
      </Container>
    </div>
  );
};

export default FormsShow;
