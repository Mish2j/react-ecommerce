import { memo } from "react";

import { centsToDollars } from "../../helper";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import styles from "./CartItem.module.scss";

const ItemDescription = ({ imgSrc, title, price }) => {
  return (
    <>
      <Col md={3} sm={12}>
        <div className={styles.img}>
          <Image fluid src={imgSrc} alt={title.trim()} />
        </div>
      </Col>
      <Col md={5}>
        <p className={styles.title}>{title}</p>
      </Col>
      <Col md={2}>
        <p className={styles.price}>${centsToDollars(price).toFixed(2)}</p>
      </Col>
    </>
  );
};

export default memo(ItemDescription);
