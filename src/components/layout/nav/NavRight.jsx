import { NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavRight.module.scss";

const NavRight = () => {
  return (
    <Col lg={4} className={`d-flex ${styles.navRight}`}>
      <Nav as="ul" className={styles.iconNav}>
        <Nav.Item as="li">
          <NavLink
            to="/shopping-cart"
            className={(nav) =>
              (nav.isActive ? styles.curPage : "") + " nav-link"
            }
          >
            <FontAwesomeIcon icon="shopping-cart" />
          </NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink
            to="/user"
            className={(nav) =>
              (nav.isActive ? styles.curPage : "") + " nav-link"
            }
          >
            <FontAwesomeIcon icon="user" />
          </NavLink>
        </Nav.Item>
      </Nav>
    </Col>
  );
};

export default NavRight;
