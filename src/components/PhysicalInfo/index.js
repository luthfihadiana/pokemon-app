/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Styles from "./styles";
import Info from "../../styles/components/Info";

const PhysicalInfo = props => {
  return (
    <div css={Styles.container}>
      <div css={Styles.info}>
        <Info type="key">Height</Info>
        <Info>{props.height}</Info>
      </div>
      <div css={Styles.info}>
        <Info type="key">Weight</Info>
        <Info>{props.weight}</Info>
      </div>
    </div>
  );
};

export default PhysicalInfo;
