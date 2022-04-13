import * as React from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Row,
  Form,
  Button,
} from "react-bootstrap";
import styled, { Breakpoints, css } from "../../theme";
import { iOptions, IThemeProp } from "../../utils/interface";

const FormWrapper = styled(Form)`
  button {
    width: 100%;
    padding: 0.75rem 0;
  }
  div {
    > input#dismissable {
      width: 2em;
      height: 2em;
    }
    > input#primaryColor {
      &.form-control:valid {
        width: 5rem;
      }
    }
  }
  div.form-switch {
    > input#darkMode {
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

interface IFormComponentProps {
  formData: iOptions;
  validated: boolean;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

const FormComponent: React.FunctionComponent<IFormComponentProps> = ({
  formData,
  validated,
  handleChange,
  handleSubmit,
}) => {
  return (
    <FormWrapper
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="my-5"
    >
      <Container>
        <Row className="g-4">
          <Col sm={6}>
            <FloatingLabel controlId="dataLayer" label="Data Layer">
              <Form.Control
                type="text"
                name="dataLayer"
                value={formData.dataLayer}
                placeholder="Data Layer"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Col>
          <Col sm={6}>
            <FloatingLabel controlId="dismissType" label="Dismiss Type *">
              <Form.Select
                name="dismissType"
                defaultValue={formData.dismissType}
                aria-label="Dismiss Type"
                onChange={handleChange}
                required
              >
                <option disabled>Select Dismiss Type</option>
                <option value="cross">Cross</option>
                <option value="cross-faint">Cross Faint</option>
                <option value="text">Text</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col sm={6}>
            <FloatingLabel controlId="closeType" label="Close Type">
              <Form.Select
                name="closeType"
                aria-label="Close Type"
                onChange={handleChange}
              >
                <option>Select Close Type</option>
                <option value="cross">Cross</option>
                <option value="tab">Tab</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col sm={6} md={3}>
            <FloatingLabel controlId="borderRadius" label="Border Radius *">
              <Form.Control
                type="number"
                name="borderRadius"
                value={formData.borderRadius}
                placeholder="Border Radius"
                min={0}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
          <Col sm={6} md={3}>
            <FloatingLabel controlId="expiration" label="Expiration *">
              <Form.Control
                type="number"
                name="expiration"
                value={formData.expiration}
                placeholder="Expiration"
                min={0}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="g-5 my-1">
          <Col xs={4}>
            <Form.Label htmlFor="primaryColor">Primary Colour *</Form.Label>
            <Form.Control
              type="color"
              id="primaryColor"
              name="primaryColor"
              value={formData.primaryColor}
              title="Choose your color"
              onChange={handleChange}
              required
            />
          </Col>
          <Col xs={4}>
            <Form.Label htmlFor="dismissable">Dismissable *</Form.Label>
            <Form.Check
              type="checkbox"
              name="dismissable"
              id="dismissable"
              onChange={handleChange}
              feedback="This is required!"
              feedbackType="invalid"
              required
            />
          </Col>
          <Col xs={4}>
            <Form.Label htmlFor="darkMode">Dark Mode</Form.Label>
            <Form.Check
              type="switch"
              name="darkMode"
              id="darkMode"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="gy-5 my-2">
          <Col sm={6} md={4}>
            <Button variant="primary">Reset</Button>
          </Col>
          <Col sm={6} md={4}>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Col>
          <Col sm={6} md={4}>
            <Button variant="primary">Download</Button>
          </Col>
        </Row>
      </Container>
    </FormWrapper>
  );
};

export default FormComponent;
