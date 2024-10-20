import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function BasicExample({props}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-dark mb-5">
      <Container>
        <Navbar.Brand>
          <h1 className="text-light">{props}</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/category" className="nav-link">
              <h5 className="text-light">Category</h5>
            </Link>
            <Link to="/product" className="nav-link">
              <h5 className="text-light">Product</h5>
            </Link>
            <Link to="/contact" className="nav-link">
              <h5 className="text-light">Contact</h5>
            </Link>
          </Nav>
          <Button
            as={Link}
            to="/SignUp"
            variant="outline-success"
            className="mx-2 bg-success text-light"
          >
            SignUp
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

BasicExample.defaultProps = {
  props : "Navbar",
};

export default BasicExample;
