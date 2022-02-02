import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Section from "../../UI/Section";

import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <Section className={`${styles["section-hero"]} d-flex align-items-center`}>
      <Row>
        <Col>
          <h4 className="text-primary">MEN COLLECTION</h4>
          <h1 className="fw-bold text-primary">
            <span className="text-secondary">Show</span> Your <br />
            Personal
            <span className="text-secondary"> Style</span>
          </h1>
          <p className="text-primary">Lorem ipsum dolor sit amet.</p>
          <Button variant="secondary" className="mt-4">
            VIEW COLLECTION
          </Button>
        </Col>
      </Row>
    </Section>
  );
};

export default HeroSection;
