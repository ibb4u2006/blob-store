import * as React from "react";
import { Alert, Button, Col, Row, Spinner } from "react-bootstrap";
import { downloadUpdatedData } from "../../utils/api";

interface IFormButtonsProps {
  loading: boolean;
  submitted: boolean;
  handleReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FormButtons: React.FunctionComponent<IFormButtonsProps> = ({
  loading,
  submitted,
  handleReset,
}) => {
  return (
    <>
      <Row className="gy-5 my-2">
        {loading ? (
          <Col md={6} className="ms-auto me-auto">
            <Button disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-3"
              />
              Loading...
            </Button>
          </Col>
        ) : (
          <>
            <Col sm={6} md={4}>
              <Button variant="primary" onClick={handleReset}>
                Reset
              </Button>
            </Col>
            <Col sm={6} md={4}>
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Col>
            <Col sm={6} md={4}>
              <Button
                variant="primary"
                onClick={() => downloadUpdatedData("options.json")}
              >
                Download
              </Button>
            </Col>
            <Col md={6} className="ms-auto me-auto">
              <Alert className="text-center" show={submitted} variant="success">
                <p>Your data was updated successfully!</p>
              </Alert>
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default FormButtons;
