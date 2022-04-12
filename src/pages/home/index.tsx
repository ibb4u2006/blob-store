import * as React from "react";
import FormComponent from "../../components/Form";
import Title from "../../components/home/Title";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <Title />
      <FormComponent />
    </>
  );
};

export default Home;
