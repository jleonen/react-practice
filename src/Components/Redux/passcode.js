import { passActions } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react/cjs/react.development";

const Passcode = () => {
  const valid = useSelector((state) => state.isValid);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [passcode, setPasscode] = useState("");

  const passCodeChangeHandler = (event) => {
    setPasscode(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();

    setError(false);
    if (passcode === "1111") {
      dispatch(passActions.login());
      setPasscode("");
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {!valid && (
        <div>
          <h2>Redux Practice</h2>
          <form onSubmit={loginHandler}>
            <label>Input passcode here for message </label>
            <input onChange={passCodeChangeHandler} />
            {error && <span>Wrong passcode! </span>}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Passcode;
