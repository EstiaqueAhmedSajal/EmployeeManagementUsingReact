import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import FormComponent from "./FormComponent";

import { Container, Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () =>  {

    return(
    <>
    <Router>
        <div>
            <Navbar big="light" expand="lg">
                <Container>
                <Navbar.Brand href="#">Bdjobs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-navba">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/HomePage"}>HomePage</Nav.Link>
                        <Nav.Link as={Link} to={"/Login"}>Login</Nav.Link>
                        <Nav.Link as={Link} to={"/Registration"}>Registration</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div>
            <Routes>
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registration" element={<FormComponent />} />
            </Routes>
        </div>
    </Router>
    </>

)
}
export default NavbarComponent;