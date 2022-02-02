import Sidebar from "../components/layout/shop/Sidebar";
import Section from "../components/UI/Section";
import Row from "react-bootstrap/Row";
import AllProducts from "../components/product/AllProducts";
import PageHeading from "../components/UI/PageHeading";
const ShopPage = () => {
  return (
    <>
      <PageHeading title="Shop Category">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </PageHeading>
      <Section>
        <Row>
          <Sidebar />
          <AllProducts />
        </Row>
      </Section>
    </>
  );
};

export default ShopPage;
