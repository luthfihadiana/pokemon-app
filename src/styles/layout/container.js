import styled from "@emotion/styled";

export const GridContainer = styled.div(props => ({
  display: "grid",
  gridTemplateColumns: `repeat(${props.numGrid}, 1fr)`,
  gap: "1.6rem"
}));

export const HeaderContainer = styled.div(props => ({
  padding: ".8rem 1rem"
}));

export const StickyScrollContainer = styled.div(props => ({
  transition: "all .2s fade",
  "&.sticky": {
    position: "fixed",
    zIndex: 1000,
    ...props.position
  }
}));
