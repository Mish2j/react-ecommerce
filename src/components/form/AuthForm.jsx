import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import { useDispatch } from "react-redux";
import {
  EMAIL_EXISTS_ERROR,
  GENERAL_ERROR,
  INVALID_CREDENTIAL_ERROR,
  SIGNIN_URL,
  SIGNUP_URL,
} from "../../config";
import { modalActions } from "../../store/modal-slice";
import useInput from "../../hooks/use-input";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { validatePassword, validateEmail } from "../../helper";

import styles from "./FormStyles.module.scss";

function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isCreatingAcc = queryParams.get("auth_form") === "signup";

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
    value: enteredPassword,
    hasError: passwordInputHasError,
    isInputValid: isPasswordInputValid,
    error: passwordError,
    inputChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    resetInput: resetPasswordInput,
  } = useInput((value) => validatePassword(value));

  const autoLoginHandler = (event) => {
    setAutoLogin(event.target.checked);
  };

  useEffect(() => {
    navigate("?auth_form=" + (isCreatingAcc ? "signup" : "login"), {
      replace: true,
    });

    return () => {
      navigate;
    };
  }, [isCreatingAcc, location.search]);

  const formChangeHandler = () => {
    navigate("?auth_form=" + (isCreatingAcc ? "login" : "signup"));
  };

  const handleErrors = (data) => {
    if (isCreatingAcc) {
      throw new Error(
        data.error.message === "EMAIL_EXISTS"
          ? EMAIL_EXISTS_ERROR
          : GENERAL_ERROR
      );
    }

    if (!isCreatingAcc) {
      throw new Error(
        data.error.message === "EMAIL_NOT_FOUND" || "INVALID_PASSWORD"
          ? INVALID_CREDENTIAL_ERROR
          : GENERAL_ERROR
      );
    }

    throw new Error(GENERAL_ERROR);
  };

  const submitHandler = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    try {
      if (!isPasswordInputValid || !isEmailInputValid) return;

      const response = await fetch(isCreatingAcc ? SIGNUP_URL : SIGNIN_URL, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      const authData = await response.json();

      if (!response.ok) {
        handleErrors(authData);
      }

      let { idToken } = authData;
      dispatch(authActions.login({ idToken, autoLogin }));

      navigate("?user_profile=username", { replace: true });

      resetEmailInput();
      resetPasswordInput();
    } catch (error) {
      dispatch(
        modalActions.openModal({ title: "Error", message: error.message })
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label className={emailInputHasError ? styles.invalidLabel : null}>
          Email address
        </Form.Label>
        <Form.Control
          className={emailInputHasError ? styles.invalid : null}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          type="email"
          value={enteredEmail}
        />

        {emailInputHasError && (
          <Form.Text className="text-muted">{emailError}</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label
          className={passwordInputHasError ? styles.invalidLabel : null}
        >
          Password
        </Form.Label>
        <Form.Control
          className={passwordInputHasError ? styles.invalid : null}
          onChange={passwordInputChangeHandler}
          onBlur={passwordInputBlurHandler}
          type="password"
          value={enteredPassword}
        />
        {passwordInputHasError && (
          <Form.Text className="text-muted">{passwordError}</Form.Text>
        )}
      </Form.Group>
      {!isCreatingAcc && (
        <Form.Group controlId="rmme">
          <Form.Check
            onChange={autoLoginHandler}
            type="checkbox"
            label="Remember me"
          />
        </Form.Group>
      )}
      <div className={styles.btnGroup}>
        <Button
          variant="secondary"
          type="submit"
          disabled={isLoading || !isEmailInputValid || !isPasswordInputValid}
          onClick={!isLoading ? submitHandler : null}
        >
          {isCreatingAcc
            ? !isLoading
              ? "signup"
              : "Loading..."
            : isLoading
            ? "Loading..."
            : "login"}
        </Button>
        <Button variant="light" onClick={formChangeHandler}>
          {isCreatingAcc ? "Login with existing account" : "Create an account"}
        </Button>
      </div>
    </Form>
  );
}
export default AuthForm;
