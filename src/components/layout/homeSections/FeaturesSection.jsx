import Section from "../../UI/Section";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./FeaturesSection.module.scss";

const FeaturesSection = () => {
  return (
    <Section>
      <Row>
        <Col md={6} lg={3}>
          <div
            className={`${styles.feature} text-center py-3 px-2 mb-3 mb-lg-0`}
          >
            <div className={`${styles["feature__icon"]} mb-3`}>
              <FontAwesomeIcon icon="dollar-sign" />
            </div>
            <h3 className={`${styles["feature__title"]} mb-2`}>
              money back guarantee
            </h3>
            <p className={styles["feature__text"]}>Lorem ipsum dolor sit</p>
          </div>
        </Col>
        <Col md={6} lg={3}>
          <div
            className={`${styles.feature} text-center py-3 px-2 mb-3 mb-lg-0`}
          >
            <div className={`${styles["feature__icon"]} mb-3`}>
              <FontAwesomeIcon icon="truck" />
            </div>
            <h3 className={`${styles["feature__title"]} mb-2`}>
              free delivery
            </h3>
            <p className={styles["feature__text"]}>Lorem ipsum dolor sit</p>
          </div>
        </Col>
        <Col md={6} lg={3}>
          <div
            className={`${styles.feature} text-center py-3 px-2 mb-3 mb-md-0`}
          >
            <div className={`${styles["feature__icon"]} mb-3`}>
              <FontAwesomeIcon icon="headset" />
            </div>
            <h3 className={`${styles["feature__title"]} mb-2`}>24/7 support</h3>
            <p className={styles["feature__text"]}>Lorem ipsum dolor sit</p>
          </div>
        </Col>
        <Col md={6} lg={3}>
          <div
            className={`${styles.feature} text-center py-3 px-2 mb-3 mb-md-0`}
          >
            <div className={`${styles["feature__icon"]} mb-3`}>
              <FontAwesomeIcon icon="money-bill" />
            </div>
            <h3 className={`${styles["feature__title"]} mb-2`}>
              secure payment
            </h3>
            <p className={styles["feature__text"]}>Lorem ipsum dolor sit</p>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default FeaturesSection;
