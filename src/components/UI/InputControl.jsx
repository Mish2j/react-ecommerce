import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./InputControl.module.scss";

const InputControl = (props) => {
  const { inputVal, incrementHandler, decrementHandler, btnVariant } = props;

  const increaseValHandler = () => {
    incrementHandler();
  };

  const decreaseValHandler = () => {
    decrementHandler();
  };

  return (
    <InputGroup className={styles.quantity}>
      <FormControl
        type="number"
        className={styles["quantity__input"]}
        value={inputVal}
        onChange={(event) => event.target.value}
      />
      <div className={styles.buttons}>
        <Button
          onClick={increaseValHandler}
          variant={btnVariant}
          className={styles["buttons__btn"]}
        >
          <FontAwesomeIcon icon="chevron-up" />
        </Button>
        <Button
          onClick={decreaseValHandler}
          variant={btnVariant}
          className={styles["buttons__btn"]}
        >
          <FontAwesomeIcon icon="chevron-down" />
        </Button>
      </div>
    </InputGroup>
  );
};

export default InputControl;
