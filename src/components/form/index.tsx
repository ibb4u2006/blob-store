import * as React from "react";
import { IFormStatusState, iOptions } from "../../utils/interface";
import FormComponent from "./Form";

const initialState: iOptions = {
  primaryColor: "#f98305",
  borderRadius: 6,
  dismissable: false,
  dismissType: "text",
  expiration: 365,
};

interface IFormContainerProps {}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const [formStatusData, setFormStatusData] = React.useState<IFormStatusState>({
    validated: false,
  });
  const [formInputData, setFormInputData] =
    React.useState<iOptions>(initialState);

  const handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormInputData((prev: iOptions) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmission = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatusData((prev: any) => ({ ...prev, validated: true }));
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log(formInputData);
    }
  };

  return (
    <FormComponent
      formData={formInputData}
      handleChange={handleInputChange}
      handleSubmit={handleFormSubmission}
      validated={formStatusData.validated}
    />
  );
};

export default FormContainer;
