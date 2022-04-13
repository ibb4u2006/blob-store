import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h4>Blob Store by Ibrahim | 2022</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
