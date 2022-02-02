import Section from "./Section";
import Row from "react-bootstrap/Row";

import styles from "./PageHeading.module.scss";

const PageHeading = (props) => {
  return (
    <Section className={styles.heading}>
      <Row>
        <h2 className="mb-3">{props.title}</h2>
        {props.children}
      </Row>
    </Section>
  );
};

export default PageHeading;
