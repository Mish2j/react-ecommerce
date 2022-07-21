import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { getProductInfo } from "../../store/product-actions";
import { modalActions } from "../../store/modal-slice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputControl from "../UI/InputControl";
import Loader from "../UI/Loader";
import NoProduct from "../UI/NoProduct";
import ProductDescription from "./ProductDescription";
import ProductInfoImg from "./ProductInfoImg";

import styles from "./ProductInfo.module.scss";

const ProductInfo = () => {
  const [quantityVal, setQuantityVal] = useState(0);
  const productDetail = useSelector((state) => state.products.productInfo);
  const isLoading = useSelector((state) => state.products.isLoading);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductInfo(+params.productId));
  }, [dispatch, params.productId]);

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
      <ProductInfoImg
        imageAlt={productDetail.title}
        imageSrc={productDetail.image}
      />
      <Col lg={6} sm={12}>
        <div className={styles["product__container"]}>
          <ProductDescription
            title={productDetail.title}
            price={productDetail.price}
            category={productDetail.category}
            description={productDetail.description}
          />
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
