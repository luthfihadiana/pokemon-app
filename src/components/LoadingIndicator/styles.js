import { css, keyframes } from "@emotion/react";
// import Color from "../../styles/base/color";

const Spin = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
`;
const Styles = {
  backdrop: css`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 3.2rem;
  `,
  indicator: css`
    width: 3.2rem;
    animation: ${Spin} 1s infinite;
  `
};

export default Styles;
