import Section from "../components/UI/Section";
import PageHeading from "../components/UI/PageHeading";
import ProductInfo from "../components/product/ProductInfo";

const ProductDetailPage = () => {
  return (
    <>
      <PageHeading title="Product Details">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </PageHeading>
      <Section>
        <ProductInfo />
      </Section>
    </>
  );
};

export default ProductDetailPage;
