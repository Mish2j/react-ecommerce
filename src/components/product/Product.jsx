import { useEffect, useState } from "react";
import { cartActions } from "../../store/cart-slice";
import { getCartItemQuantity } from "../../store/cart-actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { centsToDollars } from "../../helper";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import styles from "./Product.module.scss";

const TITLE_LENGTH = 17;
const CART_ICON_ANIM_TIME = 4000;

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const [isAnimated, setIsAnimated] = useState(false);
  const quantityInCart = getCartItemQuantity(item.id);

  const addItemToCartHandler = () => {
    setIsAnimated(true);
    dispatch(cartActions.addItem({ newItem: item }));
  };

  useEffect(() => {
    const animTimeout = setTimeout(() => {
      setIsAnimated(false);
    }, CART_ICON_ANIM_TIME);

    return () => {
      clearTimeout(animTimeout);
    };
  }, [isAnimated]);

  const titleShort =
    item.title.length > TITLE_LENGTH
      ? item.title.substr(0, TITLE_LENGTH - 1) + "..."
      : item.title;

  return (
    <Col lg={4} md={6}>
      <div className={styles.product}>
        <div className={styles["product__img"]}>
          <Image fluid src={item.image} alt={item.title} />
        </div>
        <div className={styles["product__body"]}>
          <h3>{titleShort}</h3>
          <p className={styles["product__price"]}>{`$${centsToDollars(
            item.price
          ).toFixed(2)}`}</p>
          <div>
            <Button
              onClick={addItemToCartHandler}
              className={`${styles.iconBtn} me-2 p-1`}
            >
              <FontAwesomeIcon icon="shopping-cart" />
              {quantityInCart ? (
                <span
                  className={
                    isAnimated
                      ? styles.quantity + " " + styles.animateBtn
                      : styles.quantity
                  }
                >
                  {quantityInCart}
                </span>
              ) : null}
            </Button>

            <Button
              as={Link}
              className={`${styles.iconBtn} p-1`}
              to={`product/${item.id}`}
            >
              <FontAwesomeIcon icon="eye" />
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Product;
