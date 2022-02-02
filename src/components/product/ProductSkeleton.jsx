import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Placeholder from "react-bootstrap/Placeholder";

import styles from "./ProductSkeleton.module.scss";

const ProductSkeleton = (props) => {
  return (
    <Col lg={4} md={6}>
      <Card className={styles.skeletonCard}>
        <div className={styles.skeletonImg}></div>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} />
            <Placeholder xs={6} />
          </Placeholder>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductSkeleton;
