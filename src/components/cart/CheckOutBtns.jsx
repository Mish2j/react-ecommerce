import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { modalActions } from "../../store/modal-slice";

import { Link, useNavigate } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import styles from "./CheckOut.module.scss";

const CheckOutBtns = () => {
  const cartTotalItems = useSelector((state) => state.cart.items.length);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const removeAllCartItemsHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
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
  );
};

export default CheckOutBtns;
