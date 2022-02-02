import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./FooterBottom.module.scss";

const FooterBottom = () => {
  return (
    <Row>
      <Col lg={8} md={12}>
        <p className={`${styles.rights} text-primary mb-lg-0 mb-4`}>
          Copyright ©2021 All rights reserved.
        </p>
      </Col>
      <Col lg={4} md={12}>
        <div className={styles.social}>
          <a href="#">
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={["fab", "dribbble"]} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={["fab", "behance"]} />
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default FooterBottom;
