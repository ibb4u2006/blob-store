import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";

interface ITitleProps {}

const Title: React.FunctionComponent<ITitleProps> = (props) => {
  return (
    <Container>
      <Row>
        <Col className="mt-5 text-center">
          <h1>JSON Generator and Blob Storage</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Title;
