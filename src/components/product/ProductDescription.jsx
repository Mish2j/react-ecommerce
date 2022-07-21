import { memo } from "react";

import { Link } from "react-router-dom";

import { centsToDollars } from "../../helper";

import styles from "./ProductDescription.module.scss";

const ProductDescription = ({ title, price, category, description }) => {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>{`$${centsToDollars(price).toFixed(2)}`}</p>
      <p>
        Category -
        <Link to="../../shop" className={styles.category}>
          {` ${category}`}
        </Link>
      </p>
      <p className={styles.description}>{description}</p>
    </>
  );
};

export default memo(ProductDescription);
