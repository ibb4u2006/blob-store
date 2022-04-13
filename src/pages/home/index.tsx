import * as React from "react";
import FormContainer from "../../components/form";
import Title from "../../components/home/Title";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <Title />
      <FormContainer />
    </>
  );
};

export default Home;
