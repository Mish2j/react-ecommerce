import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modal-slice";
import { cartActions } from "../../store/cart-slice";
import { ORDER_SECCESS_MSG } from "../../config";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import BillingForm from "./BillingForm";
import PaymentForm from "./PaymentForm";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [isPaymentFormValid, setIsPaymentFormValid] = useState(false);
  const [isBillingFormValid, setIsBillingFormValid] = useState(false);

  const paymentFormHandler = (isValid) => {
    setIsPaymentFormValid(isValid);
  };

  const billingFormHandler = (isValid) => {
    setIsBillingFormValid(isValid);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isPaymentFormValid || !isBillingFormValid) return;

    dispatch(
      modalActions.openModal({
        title: "Payment Complete",
        message: ORDER_SECCESS_MSG,
        isActive: true,
      })
    );

    setTimeout(() => {
      navigate(location.pathname, { replace: true });
    }, 3000);

    dispatch(cartActions.clearCart());
  };

  return (
    <Col lg={8}>
      <Form onSubmit={formSubmitHandler} className="mb-5 mb-lg-0">
        <BillingForm isBillingValid={billingFormHandler} />
        <PaymentForm isPaymentValid={paymentFormHandler} />
        <Button
          variant="secondary"
          type="submit"
          className="mt-2"
          disabled={!isPaymentFormValid || !isBillingFormValid}
        >
          checkout
        </Button>
      </Form>
    </Col>
  );
};

export default CheckoutForm;
