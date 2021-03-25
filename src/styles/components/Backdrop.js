import styled from "@emotion/styled";

const Backdrop = styled.div(props => ({
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: "50%",
  left: "50%",
  zIndex: "10001",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#00000088"
}));
export default Backdrop;
