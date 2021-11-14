import { passActions } from "../../store";
import { useSelector, useDispatch } from "react-redux";

const Message = () => {
  const valid = useSelector((state) => state.isValid);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(passActions.logout());
  };
  return (
    <div>
      {valid && (
        <div>
          <h2>
            Login successful. But there is no secret message. Press button below
            to logout.
          </h2>

          <button onClick={logoutHandler}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Message;
