/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Styles from "./styles";

import Pokeball from "../../assets/image/Pokeball.png";

const LoadingIndicator = () => {
  return (
    <div css={Styles.backdrop}>
      <img css={Styles.indicator} src={Pokeball} alt="loading-indicator" />
    </div>
  );
};

export default LoadingIndicator;
