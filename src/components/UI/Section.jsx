import Container from "react-bootstrap/Container";

import styles from "./Section.module.scss";

const Section = (props) => {
  const sectionClasses = props.className ? ` ${props.className}` : "";

  return (
    <section className={`${styles.section}${sectionClasses}`}>
      <Container>{props.children}</Container>
    </section>
  );
};

export default Section;
