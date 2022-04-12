import * as React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="/">Blob Store</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
