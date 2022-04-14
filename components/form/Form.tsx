import * as React from "react";
import { Container, Form } from "react-bootstrap";
import { iOptions } from "../../utils/interface";
import FormButtons from "./Buttons";
import FormInputs from "./Inputs";

interface IFormComponentProps {
  formData: iOptions;
  validated: boolean;
  loading: boolean;
  submitted: boolean;
  handleChange: (event: any) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FormComponent: React.FunctionComponent<IFormComponentProps> = ({
  formData,
  validated,
  loading,
  submitted,
  handleChange,
  handleSubmit,
  handleReset,
}) => {
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="my-5"
    >
      <Container>
        <FormInputs handleChange={handleChange} formData={formData} />
        <FormButtons
          loading={loading}
          submitted={submitted}
          handleReset={handleReset}
        />
      </Container>
    </Form>
  );
};

export default FormComponent;
