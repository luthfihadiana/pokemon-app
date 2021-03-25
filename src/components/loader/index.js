/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Styles from "./styles";

const Loader = () => {
  return (
    <div css={Styles.backdrop}>
      <h1 css={Styles.title}>Loading ... </h1>
    </div>
  );
};

export default Loader;
