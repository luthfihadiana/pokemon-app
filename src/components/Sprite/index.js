/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Styles from "./styles";

const Sprite = props => {
  return (
    <picture css={Styles.container}>
      <img css={Styles.sprite} src={props.sprite} alt={props.alt} />
    </picture>
  );
};

export default Sprite;
