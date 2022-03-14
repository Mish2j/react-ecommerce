const isNotEmpty = (value) => {
  if (value === null || typeof value === "undefined") return false;
  if (value.trim() === "") return false;
  return true;
};

const isValidName = (name) => {
  const re = /^[a-zA-Z]+(([':,. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
  return re.test(name);
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidZip = (zip) => {
  const re = /^\d{5}(-\d{4})?$/;
  return re.test(zip);
};

const isValidAddress = (address) => {
  const re = /^\d+\s[A-z]+\s[A-z]+/;
  return re.test(address);
};

const isValidCity = (city) => {
  const re = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
  return re.test(city);
};

const isCvvValid = (cvv) => {
  if (cvv.length < 3 || cvv.length > 4) return false;
  return true;
};

const isCardNumberValid = (cardNumber) => {
  if (cardNumber.length < 13 || cardNumber.length > 19) return false;
  return true;
};

const isCardExpDateValid = (expDate) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  let [expMonth, expYear] = expDate.split("/");
  if (expYear < currentYear) return false;
  if (expMonth < currentMonth) return false;
  return true;
};

export const validateEmail = (email) => {
  let emailError = "";
  if (!isNotEmpty(email)) {
    emailError = "Please enter your email!";
    return { status: false, error: emailError };
  }
  if (!isValidEmail(email)) {
    emailError =
      "Please enter a valid email address in this format - example@email.com";
    return { status: false, error: emailError };
  }
  return { status: true, error: emailError };
};

export const validatePassword = (password) => {
  let passwordError = "";
  if (!isNotEmpty(password)) {
    passwordError = "Please enter your password!";
    return { status: false, error: passwordError };
  }
  if (password.trim().length < 6) {
    passwordError = "Password must be at least 6 characters long.";
    return { status: false, error: passwordError };
  }
  return { status: true, error: passwordError };
};

export const validateName = (name) => {
  let nameError = "";
  if (!isNotEmpty(name)) {
    nameError = "This field cannot be empty!";
    return { status: false, error: nameError };
  }
  if (!isValidName(name)) {
    nameError = "Please enter a valid name!";
    return { status: false, error: nameError };
  }
  return { status: true, error: nameError };
};

export const validateMsg = (msg) => {
  let msgError = "";
  if (!isNotEmpty(msg)) {
    msgError = "This field cannot be empty!";
    return { status: false, error: msgError };
  }
  if (msg.trim().length <= 4) {
    msgError = "Your message is too short!";
    return { status: false, error: msgError };
  }
  return { status: true, error: msgError };
};

export const validateZip = (zip) => {
  let zipError = "";
  if (!isNotEmpty(zip)) {
    zipError = "Please enter your ZIP!";
    return { status: false, error: zipError };
  }
  if (!isValidZip(zip)) {
    zipError = "Invalid ZIP!";
    return { status: false, error: zipError };
  }
  return { status: true, error: zipError };
};

export const validateAddress = (address) => {
  let addressError = "";
  if (!isNotEmpty(address)) {
    addressError = "Please enter yout address!";
    return { status: false, error: addressError };
  }
  if (!isValidAddress(address)) {
    addressError = "Invalid address!";
    return { status: false, error: addressError };
  }
  return { status: true, error: addressError };
};

export const validateCity = (city) => {
  let cityError = "";
  if (!isNotEmpty(city)) {
    cityError = "Please enter your city!";
    return { status: false, error: cityError };
  }
  if (!isValidCity(city)) {
    cityError = "Invalid city!";
    return { status: false, error: cityError };
  }
  return { status: true, error: cityError };
};

export const validateState = (state) => {
  let stateError = "";
  if (!isNotEmpty(state)) {
    stateError = "Please select your state!";
    return { status: false, error: stateError };
  }
  return { status: true, error: stateError };
};

export const validateCvv = (cvv) => {
  let cvvError = "";
  if (!isNotEmpty(cvv)) {
    cvvError = "Please enter your CVV!";
    return { status: false, error: cvvError };
  }

  if (!isCvvValid(cvv)) {
    cvvError = "Please enter a valid (3 or 4 digit) CVV value!";
    return { status: false, error: cvvError };
  }
  return { status: true, error: cvvError };
};

export const validateCardNumber = (cardNumber) => {
  let cardNumError = "";
  if (!isNotEmpty(cardNumber)) {
    cardNumError = "Please enter your card number!";
    return { status: false, error: cardNumError };
  }

  if (!isCardNumberValid(cardNumber)) {
    cardNumError = "Please enter a valid card number!";
    return { status: false, error: cardNumError };
  }
  return { status: true, error: cardNumError };
};

export const validateCardExpDate = (cardExpDate) => {
  let cardExpDateError = "";

  if (!isNotEmpty(cardExpDate)) {
    cardExpDateError = "Please enter your card expiration date!";
    return { status: false, error: cardExpDateError };
  }

  if (!isCardExpDateValid(cardExpDate)) {
    cardExpDateError = "Please enter a valid card expiration date!";
    return { status: false, error: cardExpDateError };
  }
  return { status: true, error: cardExpDateError };
};

export const cardExpDateFormatter = (expDate) => {
  let formattedExpDate = expDate;

  return formattedExpDate
    .replace(/^([1-9]\/|[2-9])$/g, "0$1/")
    .replace(/^(0[1-9]|1[0-2])$/g, "$1/")
    .replace(/^1([3-9])$/g, "01/$1")
    .replace(/^0\/|0+$/g, "0")
    .replace(/[^\d|^\/]*/g, "")
    .replace(/\/\//g, "/");
};

export const dollarsToCents = (value) => {
  value = (value + "").replace(/[^\d.-]/g, "");
  if (value && value.includes(".")) {
    value = value.substring(0, value.indexOf(".") + 3);
  }

  return value ? Math.round(parseFloat(value) * 100) : 0;
};

export const centsToDollars = (value) => {
  value = (value + "").replace(/[^\d.-]/g, "");
  value = parseFloat(value);
  return value ? value / 100 : 0;
};
