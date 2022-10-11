/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppBar = () => {
    return (
        <Navbar bg="dark" variant="light">
            <Container>
                <Link to="/">
                    <Navbar.Brand>Quizo.</Navbar.Brand>
                </Link>
                <Nav className="ms-auto">
                    <Link to="/">
                        <a class="nav-link">Home</a>
                    </Link>
                    <Link to="/statistics">
                        <a class="nav-link">Statistics</a>
                    </Link>
                    <Link to="/blog">
                        <a class="nav-link">Blog</a>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default AppBar;