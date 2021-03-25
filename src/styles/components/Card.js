import styled from "@emotion/styled";

const Card = styled.div(pros => ({
  padding: "1rem",
  borderRadius: "1rem",
  boxShadow:
    "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
  cursor: "pointer",
  transition: "background 0.8s",
  "&:hover": {
    background:
      "#f7f7f7 radial-gradient(circle, transparent 1%, #f7f7f7 1%) center/15000%"
  },
  "&:active": {
    backgroundColor: "white",
    backgroundSize: "100%",
    transition: "background 0s"
  }
}));
export default Card;
