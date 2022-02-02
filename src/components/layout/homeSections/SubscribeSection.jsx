import Section from "../../UI/Section";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import styles from "./SubscribeSection.module.scss";

const SubscribeSection = () => {
  return (
    <Section className={styles["section-subscribe"]}>
      <Row className="align-items-center justify-content-center">
        <Col md={8} lg={7}>
          <Form className={`${styles.form} text-center`}>
            <h2 className="text-primary">Get notified on each updates.</h2>
            <InputGroup className="mb-3">
              <FormControl
                type="email"
                className={`${styles["form__input"]} text-primary`}
                placeholder="Enter your email address"
              />
              <Button variant="secondary">subscribe</Button>
            </InputGroup>
            <p className="text-primary mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, error possimus! Sit culpa necessitatibus temporibus.
            </p>
          </Form>
        </Col>
      </Row>
    </Section>
  );
};

export default SubscribeSection;
