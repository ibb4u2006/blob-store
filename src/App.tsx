import Layout from "./components/layout";
import GlobalStyle from "./globalStyles";
import Home from "./pages/home";
import { Theme, ThemeProvider } from "./theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
