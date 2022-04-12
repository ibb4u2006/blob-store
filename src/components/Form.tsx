import * as React from "react";
import { Col, Container, FloatingLabel, Row, Form } from "react-bootstrap";
import styled from "../theme";

const FormWrapper = styled.div``;

interface IFormComponentProps {}

const FormComponent: React.FunctionComponent<IFormComponentProps> = (props) => {
  return (
    <FormWrapper className="my-5">
      <Container>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Data Layer">
              <Form.Control type="text" placeholder="Data Layer" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Works with selects"
            >
              <Form.Select aria-label="Dismiss Type">
                <option>Dismiss Type</option>
                <option value="text">Text</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
      </Container>
    </FormWrapper>
  );
};

export default FormComponent;
