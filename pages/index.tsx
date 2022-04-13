import type { NextPage } from "next";
import Head from "next/head";
import FormContainer from "../components/form";
import Title from "../components/home/Title";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blob Store</title>
        <meta
          name="description"
          content="Generate and store JSON file as blob"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title />
      <FormContainer />
    </>
  );
};

export default Home;
