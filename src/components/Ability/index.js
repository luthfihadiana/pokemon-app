/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Styles from "./styles";
import { Badge } from "../../styles/components/Badge";

const Sprite = props => {
  return (
    <p css={Styles.container}>
      {props.data.map((el, idx) => (
        <Badge key={`ability-${idx}`}>
          {el.ability.name.replace(/-/g, " ")}
        </Badge>
      ))}
    </p>
  );
};

export default Sprite;
