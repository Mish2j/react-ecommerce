import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modal-slice";
import useInput from "../../hooks/use-input";
import { validateEmail, validateMsg, validateName } from "../../helper";
import { MESSAGE_SENT_SUCCESS } from "../../config";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import styles from "./FormStyles.module.scss";

const ContactForm = () => {
  const dispatch = useDispatch();

  const {
    value: enteredName,
    hasError: nameInputHasError,
    isInputValid: isNameInputValid,
    error: nameError,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    resetInput: resetNameInput,
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
    value: enteredMessage,
    hasError: msgInputHasError,
    isInputValid: isMsgInputValid,
    error: msgError,
    inputChangeHandler: msgInputChangeHandler,
    inputBlurHandler: msgInputBlurHandler,
    resetInput: resetMsgInput,
  } = useInput((value) => validateMsg(value));

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isNameInputValid || !isEmailInputValid || !isMsgInputValid) return;

    dispatch(
      modalActions.openModal({
        title: "NOTIFICATION",
        message: MESSAGE_SENT_SUCCESS,
      })
    );

    resetNameInput();
    resetEmailInput();
    resetMsgInput();
  };

  return (
    <Col lg={8}>
      <Form onSubmit={formSubmitHandler} className="mb-5 mb-lg-0">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label
            className={nameInputHasError ? styles.invalidLabel : null}
          >
            Name {nameInputHasError && <span>{`(${nameError})`}</span>}
          </Form.Label>
          <Form.Control
            className={nameInputHasError ? styles.invalid : null}
            onChange={nameInputChangeHandler}
            type="text"
            value={enteredName}
            onBlur={nameInputBlurHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label
            className={emailInputHasError ? styles.invalidLabel : null}
          >
            Email address{" "}
            {emailInputHasError && <span>{`(${emailError})`}</span>}
          </Form.Label>
          <Form.Control
            className={emailInputHasError ? styles.invalid : null}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            type="email"
            value={enteredEmail}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label className={msgInputHasError ? styles.invalidLabel : null}>
            Message {msgInputHasError && <span>{`(${msgError})`}</span>}
          </Form.Label>
          <Form.Control
            className={msgInputHasError ? styles.invalid : null}
            value={enteredMessage}
            onChange={msgInputChangeHandler}
            onBlur={msgInputBlurHandler}
            as="textarea"
            rows={5}
          />
        </Form.Group>

        <Button
          variant="secondary"
          type="submit"
          className="mt-2"
          disabled={!isNameInputValid || !isEmailInputValid || !isMsgInputValid}
        >
          Send Message
        </Button>
      </Form>
    </Col>
  );
};

export default ContactForm;
