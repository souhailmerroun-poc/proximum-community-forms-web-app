import type { NextPage } from "next";
import { Container, Row } from "react-bootstrap";
import UINavbar from "../src/ui/UINavbar";

const Index: NextPage = () => {
  return (
    <div>
      <UINavbar />
      <Container>
        <Row>
          <h1>Home</h1>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
