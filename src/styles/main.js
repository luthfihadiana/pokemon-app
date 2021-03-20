import { Global, css } from "@emotion/react";

const globalStyles = () => {
  const styles = css`
    *,
    *::after,
    *::before {
      padding: 0;
      margin: 0;
      box-sizing: inherit;
      font-family: "Montserrat", sans-serif;
    }

    html {
      font-size: 62.5%;
    }

    body {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `;
  return <Global styles={styles} />;
};
export default globalStyles;
