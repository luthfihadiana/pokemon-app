/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { GridContainer } from "../../styles/layout/container";
import Info from "../../styles/components/Info";

const Stats = props => {
  let numGrid = 2;
  if (props.windowWidth > 425) {
    numGrid += 2;
  }
  return (
    <React.Fragment>
      {props.data.map((el, idx) => (
        <GridContainer numGrid={numGrid} key={`stat-${idx}`}>
          <Info type="key">{el.stat.name.replace(/-/g, " ")}</Info>
          <Info>{el.base_stat}</Info>
        </GridContainer>
      ))}
    </React.Fragment>
  );
};

export default Stats;
