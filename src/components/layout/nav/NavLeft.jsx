import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

import styles from "./NavLeft.module.scss";

const NavLeft = () => {
  return (
    <Col lg={8} className="d-flex">
      <Nav as="ul" className={styles.navLeft}>
        <Nav.Item as="li">
          <NavLink
            to="/home"
            className={(nav) =>
              (nav.isActive ? styles.curPage : "") + " nav-link"
            }
          >
            HOME
          </NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink
            to="/shop"
            className={(nav) =>
              (nav.isActive ? styles.curPage : "") + " nav-link"
            }
          >
            SHOP
          </NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink
            to="/contact"
            className={(nav) =>
              (nav.isActive ? styles.curPage : "") + " nav-link"
            }
          >
            CONTACT
          </NavLink>
        </Nav.Item>
      </Nav>
    </Col>
  );
};

export default NavLeft;
