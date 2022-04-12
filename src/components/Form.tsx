import * as React from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Row,
  Form,
  Button,
} from "react-bootstrap";
import styled, { Breakpoints, css } from "../theme";
import { IThemeProp } from "../utils/interface";

const FormWrapper = styled.div`
  button {
    width: 100%;
    padding: 0.75rem 0;
  }
  div {
    > input#dismissable {
      width: 2em;
      height: 2em;
    }
  }
  div.form-switch {
    > input#dark-mode-switch {
      width: 6em;
      height: 2em;
      &.form-check-input:checked,
      &.form-check-input:checked:focus {
        border-color: ${(props: IThemeProp) => props.theme.colors.dark};
        background-color: ${(props: IThemeProp) => props.theme.colors.dark};
        background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e");
      }
      &.form-check-input:focus {
        background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e");
      }
      &.form-check-input,
      &.form-check-input:focus {
        border-color: ${(props: IThemeProp) => props.theme.colors.darkGrey};
        box-shadow: none;
      }
    }
  }
  ${Breakpoints.mediaBreakpointUp(
    Breakpoints.WIDTHS.lg,
    css`
      .container {
        padding: 0 10rem;
      }
    `
  )}
  ${Breakpoints.mediaBreakpointBetween(
    Breakpoints.WIDTHS.xs,
    Breakpoints.WIDTHS.sm,
    css`
      .container {
        padding: 0 3rem;
      }
    `
  )}
  ${Breakpoints.mediaBreakpointDown(
    Breakpoints.WIDTHS.sm,
    css`
      button {
        width: 100%;
      }
    `
  )}
`;

interface IFormComponentProps {}

const FormComponent: React.FunctionComponent<IFormComponentProps> = (props) => {
  return (
    <FormWrapper className="my-5">
      <Container>
        <Row className="g-5">
          <Col sm={6}>
            <FloatingLabel controlId="dataLayer" label="Data Layer">
              <Form.Control
                type="text"
                name="dataLayer"
                placeholder="Data Layer"
              />
            </FloatingLabel>
          </Col>
          <Col sm={6}>
            <FloatingLabel controlId="dismissType" label="Dismiss Type">
              <Form.Select aria-label="Dismiss Type">
                <option>Select Dismiss Type</option>
                <option value="cross">Cross</option>
                <option value="cross-faint">Cross Faint</option>
                <option value="text">Text</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col sm={6}>
            <FloatingLabel controlId="closeType" label="Close Type">
              <Form.Select aria-label="Close Type">
                <option>Select Close Type</option>
                <option value="cross">Cross</option>
                <option value="tab">Tab</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col sm={6} md={3}>
            <FloatingLabel controlId="borderRadius" label="Border Radius">
              <Form.Control
                type="number"
                name="borderRadius"
                defaultValue={6}
                placeholder="Border Radius"
                min={0}
              />
            </FloatingLabel>
          </Col>
          <Col sm={6} md={3}>
            <FloatingLabel controlId="expiration" label="Expiration">
              <Form.Control
                type="number"
                name="expiration"
                defaultValue={365}
                placeholder="Expiration"
                min={0}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="g-5 my-1">
          <Col xs={4}>
            <Form.Label htmlFor="primaryColor">Primary Colour</Form.Label>
            <Form.Control
              type="color"
              id="primaryColour"
              defaultValue="#563d7c"
              title="Choose your color"
            />
          </Col>
          <Col xs={4}>
            <Form.Label htmlFor="dismissable">Dismissable</Form.Label>
            <Form.Check type="checkbox" id="dismissable" />
          </Col>
          <Col xs={4}>
            <Form.Label htmlFor="dark-mode-switch">Dark Mode</Form.Label>
            <Form.Check type="switch" id="dark-mode-switch" />
          </Col>
        </Row>
        <Row className="gy-5 my-2">
          <Col sm={6} md={4}>
            <Button variant="primary" type="submit">
              Reset
            </Button>
          </Col>
          <Col sm={6} md={4}>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Col>
          <Col sm={6} md={4}>
            <Button variant="primary" type="submit">
              Download
            </Button>
          </Col>
        </Row>
      </Container>
    </FormWrapper>
  );
};

export default FormComponent;
