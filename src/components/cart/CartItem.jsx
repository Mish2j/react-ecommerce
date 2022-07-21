import { memo } from "react";

import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InputControl from "../UI/InputControl";
import ItemDescription from "./ItemDescription";

const CartItem = memo((props) => {
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
      <ItemDescription
        imgSrc={item.image}
        title={item.title}
        price={item.price}
      />
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
});

export default CartItem;
