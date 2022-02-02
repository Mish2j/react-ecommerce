import Section from "../../UI/Section";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./BlogSection.module.scss";
import blogImg1 from "../../../assets/images/blog-img-1.jpg";
import blogImg2 from "../../../assets/images/blog-img-2.jpg";
import blogImg3 from "../../../assets/images/blog-img-3.jpg";

const BlogSection = () => {
  return (
    <Section>
      <Row className="mb-5 justify-content-center">
        <Col lg={5} className="text-center">
          <h2 className="mb-3">Latest Blog</h2>
          <p>Numquam doloribus impedit at consectetur molestiae tempora</p>
        </Col>
      </Row>

      <Row>
        <Col md={6} lg={4}>
          <div className={`${styles.blog} mb-5 mb-lg-0`}>
            <div className={`${styles["blog__img"]} mb-4`}>
              <Image fluid src={blogImg1} />
            </div>
            <h3 className={`${styles["blog__title"]} mb-4`}>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h3>
            <p className={styles["blog__text"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda officia nulla dignissimos est voluptates aliquid.
            </p>
            <a href="#" className={styles["blog__link"]}>
              Learn more{" "}
              <span>
                <FontAwesomeIcon icon={"arrow-right"} />
              </span>
            </a>
          </div>
        </Col>

        <Col md={6} lg={4}>
          <div className={`${styles.blog} mb-5 mb-lg-0`}>
            <div className={`${styles["blog__img"]} mb-4`}>
              <Image fluid src={blogImg2} />
            </div>
            <h3 className={`${styles["blog__title"]} mb-4`}>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h3>
            <p className={styles["blog__text"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda officia nulla dignissimos est voluptates aliquid.
            </p>
            <a href="#" className={styles["blog__link"]}>
              Learn more{" "}
              <span>
                <FontAwesomeIcon icon={"arrow-right"} />
              </span>
            </a>
          </div>
        </Col>

        <Col md={6} lg={4}>
          <div className={styles.blog}>
            <div className={`${styles["blog__img"]} mb-4`}>
              <Image fluid src={blogImg3} />
            </div>
            <h3 className={`${styles["blog__title"]} mb-4`}>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h3>
            <p className={styles["blog__text"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda officia nulla dignissimos est voluptates aliquid.
            </p>
            <a href="#" className={styles["blog__link"]}>
              Learn more{" "}
              <span>
                <FontAwesomeIcon icon={"arrow-right"} />
              </span>
            </a>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default BlogSection;
