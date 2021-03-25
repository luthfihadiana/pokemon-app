/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Styles from "./styles";
import { BadgeType } from "../../styles/components/Badge";

const Type = props => {
  return (
    <div css={Styles.container}>
      {props.data.map((el, idx) => (
        <BadgeType type={el.type.name} key={`type-${idx}`}>
          {el.type.name}
        </BadgeType>
      ))}
    </div>
  );
};

export default Type;
