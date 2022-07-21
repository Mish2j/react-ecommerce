import { useSelector } from "react-redux";
import { centsToDollars } from "../../helper";

import Section from "../UI/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import CheckOutBtns from "./CheckOutBtns";

import styles from "./CheckOut.module.scss";

const CheckOut = () => {
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
  const cartTotalItems = useSelector((state) => state.cart.items.length);

  return (
    <Section>
      <Row>
        <Col lg={4} md={6} className="ms-auto">
          <InputGroup className="mb-5">
            <FormControl type="text" placeholder="Coupon Code" />
            <Button variant="secondary">apply</Button>
          </InputGroup>
          <div className="d-flex justify-content-between mb-3">
            <p className="mb-0">Subtotal</p>
            <p className={styles.total}>
              ${centsToDollars(cartTotalPrice).toFixed(2)}
            </p>
          </div>
        </Col>
      </Row>
      <CheckOutBtns totalItems={cartTotalItems} />
    </Section>
  );
};

export default CheckOut;
