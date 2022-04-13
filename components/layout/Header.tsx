import * as React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container className="justify-content-center">
        <Navbar.Brand href="/">
          <h1>Blob Store</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
