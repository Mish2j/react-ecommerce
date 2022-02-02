import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../store/product-actions";
import { useEffect } from "react";

import Product from "./Product";
import ProductSkeleton from "./ProductSkeleton";
import NoProduct from "../UI/NoProduct";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AllProducts = () => {
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Col lg={9}>
        <Row>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </Row>
      </Col>
    );
  }

  if (!products || products.length === 0) {
    return (
      <Col lg={9}>
        <NoProduct text="No product found." />
      </Col>
    );
  }

  const content = products.map((item) => <Product key={item.id} item={item} />);

  return (
    <Col lg={9}>
      <Row>{content}</Row>
    </Col>
  );
};

export default AllProducts;
