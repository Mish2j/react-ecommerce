import { useEffect } from "react";
import useInput from "../../hooks/use-input";
import {
  validateEmail,
  validateName,
  validateZip,
  validateAddress,
  validateCity,
  validateState,
} from "../../helper";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "./FormStyles.module.scss";

const BillingForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameInputHasError,
    isInputValid: isFirstNameInputValid,
    error: firstNameError,
    inputChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    resetInput: resetFirstNameInput,
  } = useInput((value) => validateName(value));

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    isInputValid: isLastNameInputValid,
    error: lastNameError,
    inputChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    resetInput: resetLastNameInput,
  } = useInput((value) => validateName(value));

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isInputValid: isEmailInputValid,
    error: emailError,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    resetInput: resetEmailInput,
  } = useInput((value) => validateEmail(value));

  const {
    value: enteredAddress,
    hasError: addressInputHasError,
    isInputValid: isAddressInputValid,
    error: addressError,
    inputChangeHandler: addressInputChangeHandler,
    inputBlurHandler: addressInputBlurHandler,
    resetInput: resetAddressInput,
  } = useInput((value) => validateAddress(value));

  const {
    value: enteredZip,
    hasError: zipInputHasError,
    isInputValid: isZipInputValid,
    error: zipError,
    inputChangeHandler: zipInputChangeHandler,
    inputBlurHandler: zipInputBlurHandler,
    resetInput: resetZipInput,
  } = useInput((value) => validateZip(value));

  const {
    value: enteredCity,
    hasError: cityInputHasError,
    isInputValid: isCityInputValid,
    error: cityError,
    inputChangeHandler: cityInputChangeHandler,
    inputBlurHandler: cityInputBlurHandler,
    resetInput: resetCityInput,
  } = useInput((value) => validateCity(value));

  const {
    value: enteredState,
    hasError: stateInputHasError,
    isInputValid: isStateInputValid,
    error: stateError,
    inputChangeHandler: stateInputChangeHandler,
    inputBlurHandler: stateInputBlurHandler,
    resetInput: resetStateInput,
  } = useInput((value) => validateState(value));

  const isFormValid =
    isFirstNameInputValid &&
    isLastNameInputValid &&
    isEmailInputValid &&
    isAddressInputValid &&
    isZipInputValid &&
    isCityInputValid &&
    isStateInputValid;

  useEffect(() => {
    props.isBillingValid(isFormValid);
  }, [isFormValid]);

  return (
    <>
      <h2>Billing address</h2>
      <Row>
        <Form.Group as={Col} sm={6} className="mb-3" controlId="firstName">
          <Form.Label
            className={firstNameInputHasError ? styles.invalidLabel : null}
          >
            First name
          </Form.Label>
          <Form.Control
            className={firstNameInputHasError ? styles.invalid : null}
            onChange={firstNameInputChangeHandler}
            value={enteredFirstName}
            onBlur={firstNameInputBlurHandler}
          />
          {firstNameInputHasError && <Form.Text>{firstNameError}</Form.Text>}
        </Form.Group>

        <Form.Group as={Col} sm={6} className="mb-3" controlId="lastName">
          <Form.Label
            className={lastNameInputHasError ? styles.invalidLabel : null}
          >
            Last name
          </Form.Label>
          <Form.Control
            className={lastNameInputHasError ? styles.invalid : null}
            onChange={lastNameInputChangeHandler}
            value={enteredLastName}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameInputHasError && <Form.Text>{lastNameError}</Form.Text>}
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label className={emailInputHasError ? styles.invalidLabel : null}>
          Email
        </Form.Label>
        <Form.Control
          className={emailInputHasError ? styles.invalid : null}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          type="email"
          value={enteredEmail}
        />
        {emailInputHasError && <Form.Text>{emailError}</Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label
          className={addressInputHasError ? styles.invalidLabel : null}
        >
          Address
        </Form.Label>
        <Form.Control
          className={addressInputHasError ? styles.invalid : null}
          onChange={addressInputChangeHandler}
          value={enteredAddress}
          onBlur={addressInputBlurHandler}
        />
        {addressInputHasError && <Form.Text>{addressError}</Form.Text>}
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} sm={4} className="col-6" controlId="city">
          <Form.Label
            className={cityInputHasError ? styles.invalidLabel : null}
          >
            City
          </Form.Label>
          <Form.Control
            className={cityInputHasError ? styles.invalid : null}
            onChange={cityInputChangeHandler}
            value={enteredCity}
            onBlur={cityInputBlurHandler}
          />
          {cityInputHasError && <Form.Text>{cityError}</Form.Text>}
        </Form.Group>

        <Form.Group as={Col} sm={4} className="col-6" controlId="state">
          <Form.Label
            className={stateInputHasError ? styles.invalidLabel : null}
          >
            State
          </Form.Label>
          <Form.Select
            className={stateInputHasError ? styles.invalid : null}
            onChange={stateInputChangeHandler}
            value={enteredState}
            onBlur={stateInputBlurHandler}
          >
            <option></option>
            <option>California</option>
            <option>Arizona</option>
          </Form.Select>
          {stateInputHasError && <Form.Text>{stateError}</Form.Text>}
        </Form.Group>

        <Form.Group as={Col} sm={4} className="col-6" controlId="zip">
          <Form.Label className={zipInputHasError ? styles.invalidLabel : null}>
            Zip
          </Form.Label>

          <Form.Control
            className={zipInputHasError ? styles.invalid : null}
            onChange={zipInputChangeHandler}
            value={enteredZip}
            onBlur={zipInputBlurHandler}
          />
          {zipInputHasError && <Form.Text>{zipError}</Form.Text>}
        </Form.Group>
      </Row>

      <hr className="my-5" />
    </>
  );
};

export default BillingForm;
