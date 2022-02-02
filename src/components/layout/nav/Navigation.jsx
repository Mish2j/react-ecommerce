import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";

import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/home"
          className={`fw-bold text-dark ${styles.logo}`}
        >
          ShopHere
        </Navbar.Brand>
        <Navbar.Toggle className={`${styles.menu} navbar-light`} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Row className="w-100 justify-content-between">
            <NavLeft />
            <NavRight />
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
