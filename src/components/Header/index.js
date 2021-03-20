/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Styles from "./styles";
import Pokeball from "../../assets/svg/Pokeball.svg";

export default function index() {
  return (
    <div css={Styles.container}>
      <img src={Pokeball} css={Styles.image} alt="pokemon-app-logo" />
    </div>
  );
}
