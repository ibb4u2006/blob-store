import * as React from "react";
import { IFormStatusState, iOptions } from "../../utils/interface";
import FormComponent from "./Form";

const initialState: iOptions = {
  dataLayer: "Data Layer",
  primaryColor: "#f98305",
  borderRadius: 6,
  dismissable: false,
  darkMode: false,
  dismissType: "text",
  closeType: "cross",
  expiration: 365,
};

interface IFormContainerProps {}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const [formStatusData, setFormStatusData] = React.useState<IFormStatusState>({
    validated: false,
  });
  const [formInputData, setFormInputData] =
    React.useState<iOptions>(initialState);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/blob");

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const dataFromFile = await response.json();
      setFormInputData(dataFromFile);
      return dataFromFile;
    };
    fetchData();
  }, []);

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
      postFormInputData();
    }
  };

  const handleFormReset = () => {
    setFormInputData(initialState);
  };

  const postFormInputData = async () => {
    const response = await fetch("/api/blob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInputData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  };

  return (
    <FormComponent
      formData={formInputData}
      handleChange={handleInputChange}
      handleSubmit={handleFormSubmission}
      handleReset={handleFormReset}
      validated={formStatusData.validated}
    />
  );
};

export default FormContainer;
