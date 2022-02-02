import { Link } from "react-router-dom";

import Section from "../../UI/Section";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import maleShoppingImage from "../../../assets/images/male-shopping.jpg";
import femaleShoppingImage from "../../../assets/images/female-shopping.jpg";

const ProductsSection = () => {
  return (
    <Section>
      <Row className="mb-5 justify-content-center">
        <Col lg={5} className="text-center">
          <h2 className="mb-3">Products</h2>
          <p>Numquam doloribus impedit at consectetur molestiae tempora</p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <div className="mb-md-0 mb-5">
            <div className="mb-4">
              <Image fluid={true} src={maleShoppingImage} alt="male shopping" />
            </div>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              itaque voluptatem laudantium quas nam obcaecati quisquam ratione
              repudiandae ex dolore.
            </p>
            <Link to="/shop">
              <Button variant="secondary">shop for men</Button>
            </Link>
          </div>
        </Col>

        <Col md={6}>
          <div>
            <div className="mb-4">
              <Image
                fluid={true}
                src={femaleShoppingImage}
                alt="female shopping"
              />
            </div>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              itaque voluptatem laudantium quas nam obcaecati quisquam ratione
              repudiandae ex dolore.
            </p>
            <Link to="/shop">
              <Button variant="secondary">shop for women</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default ProductsSection;
