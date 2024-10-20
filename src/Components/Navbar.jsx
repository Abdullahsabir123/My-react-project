import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function BasicExample(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h1>{props.title}</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/category" className="nav-link"><h5>Category</h5></Link>
            <Link to="/product" className="nav-link"><h5>Product</h5></Link>
            <Link to="/contact" className="nav-link"><h5>Contact</h5></Link>
          </Nav>
          <Button variant="outline-success" className="mx-2">
            <Link to='/SignIn' style={{ textDecoration: 'none', color: 'inherit' }}>SignIn</Link>
          </Button>
          <Button variant="outline-success">
            <Link to='/SignUp' style={{ textDecoration: 'none', color: 'inherit' }}>SignUp</Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Correcting the defaultProps declaration
BasicExample.defaultProps = {
  title: 'Navbar',
};

export default BasicExample;
