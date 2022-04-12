import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <Container>
      <Row>
        <Col>Blob Store by Ibrahim | Copyright 2022</Col>
      </Row>
    </Container>
  );
};

export default Footer;
