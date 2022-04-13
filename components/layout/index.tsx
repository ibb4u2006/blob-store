import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
