import * as React from "react";
import initialState from "../../data/initialState";
import { colorRgbaToHex } from "../../helpers/colors";
import {
  fetchDataFromLocal,
  postDataToLocal,
  putDataToRemote,
} from "../../utils/api";
import { IFormStatusState, iOptions } from "../../utils/interface";
import FormComponent from "./Form";

interface IFormContainerProps {}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const [formStatusData, setFormStatusData] = React.useState<IFormStatusState>({
    validated: false,
    loading: false,
    submitted: false,
  });
  const [formInputData, setFormInputData] =
    React.useState<iOptions>(initialState);

  React.useEffect(() => {
    (async () => {
      const dataFromFile = await fetchDataFromLocal();
      setFormInputData({
        ...dataFromFile,
        primaryColor: colorRgbaToHex(dataFromFile.primaryColor),
      });
    })();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormInputData((prev: iOptions) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatusData((prev: IFormStatusState) => ({
      ...prev,
      validated: true,
    }));
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setFormStatusData((prev: IFormStatusState) => ({
        ...prev,
        loading: true,
      }));
      setTimeout(() => {
        postDataToLocal(formInputData);
        putDataToRemote(formInputData);
        setFormStatusData((prev: IFormStatusState) => ({
          ...prev,
          loading: false,
          submitted: true,
        }));
        setTimeout(() => {
          setFormStatusData((prev: IFormStatusState) => ({
            ...prev,
            submitted: false,
          }));
        }, 2000);
      }, 1000);
    }
  };

  const handleFormReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    setFormInputData(initialState);
  };

  return (
    <FormComponent
      formData={formInputData}
      handleChange={handleInputChange}
      handleSubmit={handleFormSubmission}
      handleReset={handleFormReset}
      validated={formStatusData.validated}
      loading={formStatusData.loading}
      submitted={formStatusData.submitted}
    />
  );
};

export default FormContainer;
