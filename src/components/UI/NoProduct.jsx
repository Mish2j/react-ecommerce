import Row from "react-bootstrap/Row";

const NoProduct = (props) => {
  return (
    <Row className="justify-content-center">
      <p className="fs-5 text-center">{props.text}</p>
    </Row>
  );
};

export default NoProduct;
