import { css } from "@emotion/react";
const Styles = {
  backdrop: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  hide: css`
    display: none;
    z-index: -1;
    opacity: 0;
    transform: translate(-50%, -50%);
    animation: all 0.25s;
  `,
  container: css`
    background: white;
    padding: 1.6rem;
    border-radius: 1rem;
    width: 90%;
    max-height: 70vh;
    max-width: 42.5rem;
  `
};

export default Styles;
