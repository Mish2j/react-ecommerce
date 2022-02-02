import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import styles from "./FooterForm.module.scss";

const FooterForm = () => {
  return (
    <Col md={6} lg={4}>
      <Form className={styles.form}>
        <h3>Newsletter</h3>
        <p className={`${styles["form__text"]} mb-3`}>
          You can trust us. we only send promo offers.
        </p>
        <div className="d-flex align-items-center justify-content-end">
          <FormControl
            type="email"
            className={styles["form__input"]}
            placeholder="Your email address"
          />
          <Button variant="secondary" className={styles["form__btn"]}>
            subscribe
          </Button>
        </div>
      </Form>
    </Col>
  );
};

export default FooterForm;
