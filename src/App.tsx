import FormComponent from "./components/Form";
import Layout from "./components/layout";
import GlobalStyle from "./globalStyles";
import { Theme, ThemeProvider } from "./theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Layout>
        <FormComponent />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
