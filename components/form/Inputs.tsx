import * as React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { iOptions } from "../../utils/interface";

interface IFormInputsProps {
  formData: iOptions;
  handleChange: (event: any) => void;
}

const FormInputs: React.FunctionComponent<IFormInputsProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <>
      <Row className="g-4">
        <Col sm={6}>
          <FloatingLabel controlId="dataLayer" label="Data Layer">
            <Form.Control
              type="text"
              name="dataLayer"
              value={formData.dataLayer || ""}
              placeholder="Data Layer"
              onChange={handleChange}
            />
          </FloatingLabel>
        </Col>
        <Col sm={6}>
          <FloatingLabel controlId="dismissType" label="Dismiss Type *">
            <Form.Select
              name="dismissType"
              value={formData.dismissType || ""}
              aria-label="Dismiss Type"
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Dismiss Type
              </option>
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
              value={formData.closeType || ""}
              onChange={handleChange}
            >
              <option value="">Select Close Type</option>
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
              value={formData.borderRadius || 0}
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
              value={formData.expiration || 0}
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
            value={formData.primaryColor || ""}
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
            checked={formData.dismissable || false}
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
            checked={formData.darkMode || false}
            onChange={handleChange}
          />
        </Col>
      </Row>
    </>
  );
};

export default FormInputs;
