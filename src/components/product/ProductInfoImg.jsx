import { memo } from "react";

import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

import styles from "./ProductInfoImg.module.scss";

const ProductInfoImg = ({ imageSrc, imageAlt }) => {
  return (
    <Col lg={6} sm={12}>
      <div className={styles.image}>
        <Image fluid src={imageSrc} alt={imageAlt} />
      </div>
    </Col>
  );
};

export default memo(ProductInfoImg);
