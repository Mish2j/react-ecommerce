import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { modalActions } from "../../store/modal-slice";
import { centsToDollars } from "../../helper";

import { Link, useNavigate } from "react-router-dom";

import Section from "../UI/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import styles from "./CheckOut.module.scss";

const CheckOut = () => {
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
  const cartTotalItems = useSelector((state) => state.cart.items.length);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeAllCartItemsHandler = () => {
    dispatch(cartActions.clearCart());
  };

  const openCheckOutModal = () => {
    let message = "";

    if (!cartTotalItems) {
      message = `Your shopping cart is empty!`;
      dispatch(
        modalActions.openModal({
          title: "CHECKOUT",
          message,
          isActive: true,
        })
      );
      return;
    }

    navigate("?form=checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <Row>
        <div className="mb-3">
          <div className={styles.buttons}>
            <Button variant="light" as={Link} to="/shop">
              continue shopping
            </Button>
            <Button
              variant="secondary"
              className={styles.checkoutBtn}
              onClick={openCheckOutModal}
            >
              proceed to checkout
            </Button>
          </div>
        </div>
        <div className="mt-5">
          <Button onClick={removeAllCartItemsHandler} variant="secondary">
            remove all items
          </Button>
        </div>
      </Row>
    </Section>
  );
};

export default CheckOut;
