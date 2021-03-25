import { css, keyframes } from "@emotion/react";
// import Color from "../../styles/base/color";

const blink = keyframes`
  0% {
    color: black;
  }
  50% {
    color: grey;
  }
  100% {
    color: black;
  }
`;
const Styles = {
  backdrop: css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 90;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  `,
  titlle: css`
    font-size: 2.4em;
    animation: ${blink} 1.5s infinite;
  `
};

export default Styles;
