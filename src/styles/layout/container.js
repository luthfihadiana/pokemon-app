import styled from "@emotion/styled";

export const GridContainer = styled.div(props => ({
  display: "grid",
  gridTemplateColumns: `repeat(${props.numGrid}, 1fr)`
}));
