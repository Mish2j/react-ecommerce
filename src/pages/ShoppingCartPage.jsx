import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cart from "../components/cart/Cart";
import Section from "../components/UI/Section";
import Row from "react-bootstrap/Row";
import CheckOut from "../components/cart/CheckOut";
import PageHeading from "../components/UI/PageHeading";

import CheckoutForm from "../components/form/CheckoutForm";

const ShoppingCartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const queryParams = new URLSearchParams(location.search);
  const isCheckOut = queryParams.get("form") === "checkout";
  const navigate = useNavigate();

  useEffect(() => {
    navigate(location.pathname);

    return () => {
      navigate;
    };
  }, [location.pathname]);

  return (
    <>
      <PageHeading title="Shopping Cart">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </PageHeading>
      <Section>
        <Row className="justify-content-center">
          {isCheckOut ? <CheckoutForm /> : <Cart />}
        </Row>
      </Section>
      {cartItems.length === 0 ? null : !isCheckOut && <CheckOut />}
    </>
  );
};

export default ShoppingCartPage;
