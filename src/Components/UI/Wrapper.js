import { Fragment } from "react/cjs/react.development";
import MainHeader from "../Header/MainHeader";

const Wrapper = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Wrapper;
