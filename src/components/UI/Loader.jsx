import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <Row className="justify-content-center">
      <Spinner animation="grow" variant="secondary" className="m-1" />
      <Spinner animation="grow" variant="secondary" className="m-1" />
      <Spinner animation="grow" variant="secondary" className="m-1" />
    </Row>
  );
};

export default Loader;
