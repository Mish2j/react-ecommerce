import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { getProductInfo } from "../../store/product-actions";
import { centsToDollars } from "../../helper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputControl from "../UI/InputControl";
import Loader from "../UI/Loader";
import NoProduct from "../UI/NoProduct";

import styles from "./ProductInfo.module.scss";
import { modalActions } from "../../store/modal-slice";

const ProductInfo = () => {
  const [quantityVal, setQuantityVal] = useState(0);
  const productDetail = useSelector((state) => state.products.productInfo);
  const isLoading = useSelector((state) => state.products.isLoading);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductInfo(+params.productId));
  }, [dispatch]);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({ newItem: productDetail, newItemQuant: quantityVal })
    );
    dispatch(
      modalActions.openModal({
        title: "Cart",
        message: `Item "${productDetail.title}" is added to the cart.`,
      })
    );

    setQuantityVal(0);
  };

  const increaseQuantHandler = () => {
    setQuantityVal((prevVal) => prevVal + 1);
  };

  const decreaseQuantHandler = () => {
    if (!quantityVal) return;
    setQuantityVal((prevVal) => prevVal - 1);
  };

  if (isLoading) return <Loader />;

  if (
    Object.keys(productDetail).length === 0 &&
    productDetail.constructor === Object
  ) {
    return <NoProduct text="No product found." />;
  }

  return (
    <Row className={styles.product}>
      <Col lg={6} sm={12}>
        <div className={styles["product__img"]}>
          <Image fluid src={productDetail.image} alt={productDetail.title} />
        </div>
      </Col>
      <Col lg={6} sm={12}>
        <div className={styles["product__text"]}>
          <h3>{productDetail.title}</h3>
          <p className={styles["product__price"]}>
            {`$${centsToDollars(productDetail.price).toFixed(2)}`}
          </p>
          <p>
            Category -
            <Link to="../../shop" className={styles["product__category"]}>
              {` ${productDetail.category}`}
            </Link>
          </p>
          <p className={styles["product__description"]}>
            {productDetail.description}
          </p>
          <div className={styles["product__quantity"]}>
            <p>Quantity:</p>
            <InputControl
              inputVal={quantityVal}
              incrementHandler={increaseQuantHandler}
              decrementHandler={decreaseQuantHandler}
              btnVariant="light"
            />
          </div>
          <Button
            variant="secondary"
            className="me-1"
            onClick={addToCartHandler}
            disabled={!quantityVal && true}
          >
            add to cart
          </Button>
          <Button variant="light">
            <FontAwesomeIcon icon="heart" />
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default ProductInfo;
