import "./Info.css";

const Info = (props) => {
  const classes = "info";
  return <div className={classes}>{props.children}</div>;
};

export default Info;
