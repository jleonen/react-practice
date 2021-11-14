const message = () => {
  const logoutHandler = (props) => {
    props.onLogout();
  };
  return (
    <div>
      <h2>
        Login successful. But there is no secret message. Press button below to
        logout.
      </h2>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default message;
