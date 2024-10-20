import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Footer({props}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand>
        <h1>{props}</h1>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/category" className="nav-link">
            <h5>Category</h5>
          </Link>
          <Link to="/" className="nav-link">
            <h5>Product</h5>
          </Link>
          <Link to="/contact" className="nav-link">
            <h5>Contact</h5>
          </Link>
        </Nav>
        <Button
          as={Link}
          to="/SignUp"
          variant="outline-success"
          className="mx-2"
        >
          SignUp
        </Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

Footer.defaultProps = {
  props : "Footer",
};
