import uuid from "react-uuid";

import Col from "react-bootstrap/Col";
import styles from "./LinkColumn.module.scss";

const LinkColumn = (props) => {
  const { title, links } = props;

  const allLinks = links.map((link) => {
    return (
      <li key={uuid()}>
        <a href="#">{link}</a>
      </li>
    );
  });

  return (
    <Col md={6} lg={2}>
      <div className={`${styles.list} mb-5 mb-lg-0`}>
        <h3 className={`${styles["list__title"]}`}>{title}</h3>
        <ul className={`${styles["list__links"]} list-unstyled`}>{allLinks}</ul>
      </div>
    </Col>
  );
};

export default LinkColumn;
