/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { GridContainer } from "../../styles/layout/container";
import Info from "../../styles/components/Info";

const Moves = props => {
  let numGrid = 2;
  if (props.windowWidth > 425) {
    numGrid += 2;
  }
  return (
    <GridContainer numGrid={numGrid}>
      {props.data.map((el, idx) => (
        <Info key={`move-${idx}`}>{el.move.name.replace(/-/g, " ")}</Info>
      ))}
    </GridContainer>
  );
};

export default Moves;
