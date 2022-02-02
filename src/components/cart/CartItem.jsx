import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { centsToDollars } from "../../helper";

import styles from "./CartItem.module.scss";
import InputControl from "../UI/InputControl";

const CartItem = (props) => {
  const { item } = props;

  const dispatch = useDispatch();

  const increaseQuantityHandler = () => {
    dispatch(cartActions.addItem({ newItem: item }));
  };

  const decreaseQuantityHandler = () => {
    dispatch(cartActions.decreaseQuantity({ itemId: item.id }));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(item.id));
  };

  return (
    <Row className="align-items-center mb-5">
      <Col md={3} sm={12}>
        <div className={styles.img}>
          <Image fluid src={item.image} alt={item.title.trim()} />
        </div>
      </Col>
      <Col md={5}>
        <p className={styles.title}>{item.title}</p>
      </Col>
      <Col md={2}>
        <p className={styles.price}>${centsToDollars(item.price).toFixed(2)}</p>
      </Col>
      <Col md={2} className="col-4 m-auto">
        <InputControl
          inputVal={item.quantity}
          incrementHandler={increaseQuantityHandler}
          decrementHandler={decreaseQuantityHandler}
          btnVariant="secondary"
        />
        <div className="mt-4 text-center">
          <Button variant="light" onClick={removeItemHandler}>
            <FontAwesomeIcon icon="trash-alt" />
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default CartItem;
