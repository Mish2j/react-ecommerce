import { useState, useEffect } from "react";
import useInput from "../../hooks/use-input";
import {
  validateName,
  validateCvv,
  validateCardNumber,
  validateCardExpDate,
  cardExpDateFormatter,
} from "../../helper";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "./FormStyles.module.scss";

const PaymentForm = (props) => {
  const [isPaymentSelected, setIsPaymentSelected] = useState(false);

  const paymentMethodHandler = () => {
    setIsPaymentSelected(true);
  };

  const {
    value: enteredCardName,
    hasError: cardNameInputHasError,
    isInputValid: isCardNameInputValid,
    error: cardNameError,
    inputChangeHandler: cardNameInputChangeHandler,
    inputBlurHandler: cardNameInputBlurHandler,
    resetInput: resetCardNameInput,
  } = useInput((value) => validateName(value));

  const {
    value: enteredCvv,
    hasError: cvvInputHasError,
    isInputValid: isCvvInputValid,
    error: cvvError,
    inputChangeHandler: cvvInputChangeHandler,
    inputBlurHandler: cvvInputBlurHandler,
    resetInput: resetCvvInput,
  } = useInput((value) => validateCvv(value));

  const {
    value: enteredCardNumber,
    hasError: cardNumberInputHasError,
    isInputValid: isCardNumberInputValid,
    error: cardNumberError,
    inputChangeHandler: cardNumberInputChangeHandler,
    inputBlurHandler: cardNumberInputBlurHandler,
    resetInput: resetCardNumberInput,
  } = useInput((value) => validateCardNumber(value));

  const {
    value: enteredCardExpDate,
    hasError: cardExpDateInputHasError,
    isInputValid: isCardExpDateInputValid,
    error: cardExpDateError,
    inputChangeHandler: cardExpDateInputChangeHandler,
    inputBlurHandler: cardExpDateInputBlurHandler,
    resetInput: resetCardExpDateInput,
  } = useInput((value) => validateCardExpDate(value));

  const isFormValid =
    isCardNameInputValid &&
    isCardNumberInputValid &&
    isCvvInputValid &&
    isPaymentSelected;

  useEffect(() => {
    props.isPaymentValid(isFormValid);
  }, [isFormValid]);

  return (
    <>
      <h2>Payment</h2>
      <Form.Group as={Row} className="mb-3">
        <Col sm={10}>
          <Form.Check
            type="radio"
            label="Credit card"
            name="paymentMethod"
            id="cc"
            onChange={paymentMethodHandler}
          />
          <Form.Check
            type="radio"
            label="Debit card"
            name="paymentMethod"
            id="dc"
            onChange={paymentMethodHandler}
          />
          <Form.Check
            type="radio"
            label="PayPal"
            name="paymentMethod"
            id="pp"
            onChange={paymentMethodHandler}
          />
        </Col>
      </Form.Group>
      <Row>
        <Form.Group as={Col} sm={6} className="mb-3" controlId="cc-name">
          <Form.Label
            className={cardNameInputHasError ? styles.invalidLabel : null}
          >
            Name on card
          </Form.Label>
          <Form.Control
            className={cardNameInputHasError ? styles.invalid : null}
            onChange={cardNameInputChangeHandler}
            value={enteredCardName}
            onBlur={cardNameInputBlurHandler}
          />
          {cardNameInputHasError && <Form.Text>{cardNameError}</Form.Text>}
        </Form.Group>
        <Form.Group as={Col} sm={6} className="mb-3" controlId="cc-number">
          <Form.Label
            className={cardNumberInputHasError ? styles.invalidLabel : null}
          >
            Card number
          </Form.Label>
          <Form.Control
            className={cardNumberInputHasError ? styles.invalid : null}
            onChange={cardNumberInputChangeHandler}
            type="number"
            value={enteredCardNumber}
            onBlur={cardNumberInputBlurHandler}
          />
          {cardNumberInputHasError && <Form.Text>{cardNumberError}</Form.Text>}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} sm={3} className="mb-3 col-6" controlId="cc-exp">
          <Form.Label
            className={cardExpDateInputHasError ? styles.invalidLabel : null}
          >
            Expiration
          </Form.Label>
          <Form.Control
            className={`${
              cardExpDateInputHasError ? styles.invalid : null
            } text-center`}
            onChange={cardExpDateInputChangeHandler}
            value={cardExpDateFormatter(enteredCardExpDate)}
            onBlur={cardExpDateInputBlurHandler}
          />
          {cardExpDateInputHasError && (
            <Form.Text>{cardExpDateError}</Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Col} sm={3} className="mb-3 col-6" controlId="cc-cvv">
          <Form.Label className={cvvInputHasError ? styles.invalidLabel : null}>
            CVV
          </Form.Label>
          <Form.Control
            className={cvvInputHasError ? styles.invalid : null}
            onChange={cvvInputChangeHandler}
            type="number"
            value={enteredCvv}
            onBlur={cvvInputBlurHandler}
          />
          {cvvInputHasError && <Form.Text>{cvvError}</Form.Text>}
        </Form.Group>
      </Row>

      <hr className="my-5" />
    </>
  );
};

export default PaymentForm;
