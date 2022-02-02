import Section from "../../UI/Section";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import styles from "./AboutSection.module.scss";
import aboutUsImage from "../../../assets/images/aboutUs-img.jpg";

const AboutSection = () => {
  return (
    <Section>
      <Row className={`${styles.about} align-items-center`}>
        <Col md={8}>
          <div className={styles["about__left"]}>
            <Image fluid={true} src={aboutUsImage} />
            <div className={styles["about__intro"]}>
              <p className={`${styles["about__intro--bold"]} mb-0`}>
                Trusted Merchant
              </p>
              <p className="mb-0 text-uppercase">for 50 years</p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles["about__right"]}>
            <h2 className={`${styles["about__title"]} mb-4`}>About Us</h2>
            <p className={`${styles["about__text"]} mb-4`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga
              ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum
              inventore, rem maxime, nisi excepturi ipsam libero ratione
              adipisci alias eius vero vel!
            </p>
            <Button variant="secondary">learn more</Button>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default AboutSection;
