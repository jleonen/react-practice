import { passActions } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react/cjs/react.development";

const Passcode = () => {
  const valid = useSelector((state) => state.isValid);
  console.log(valid);
  const dispatch = useDispatch();
  console.log(dispatch);
  const [error, setError] = useState(false);
  const [passcode, setPasscode] = useState("");

  const passCodeChangeHandler = (event) => {
    setPasscode(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(valid);
    setError(false);
    if (passcode === "1111") {
      console.log("message shown");

      dispatch(passActions.login());
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {!valid && (
        <div>
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
