import { memo } from "react";

import Col from "react-bootstrap/Col";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

const Sidebar = () => {
  return (
    <Col lg={3}>
      <CategoryFilter />
      <PriceFilter />
    </Col>
  );
};

export default memo(Sidebar);
