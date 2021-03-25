import { css } from "@emotion/react";
// import Color from "../../styles/base/color";

const Styles = {
  background: css`
    background: #ff416c; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ff4b2b,
      #ff416c
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #ff4b2b,
      #ff416c
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `,
  link: css`
    color: white;
    text-decoration: none;
    font-size: 1.4rem;
  `,
  pageTitle: css`
    color: white;
    font-family: var(--titleFont);
  `,
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 102.4rem;
    margin: 0 auto;
  `,
  container: css`
    background-color: white;
    border-radius: 1rem 1rem 0 0;
    padding: 1.6rem;
    width: 100%;
    color: var(--primary);
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    min-height: 100vh;
    max-width: 102.4rem;
    margin: 0 auto;
  `,
  element: css`
    position: relative;
  `,
  elementHeader: css`
    display: flex;
    gap: 1.6rem;
    width: 100%;
  `,
  elementImageContainer: css`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.8rem;
  `,
  elementImage: css`
    height: auto;
    max-width: 12rem;
  `,
  elementName: css`
    font-size: 1.8rem;
    text-transform: capitalize;
  `,
  button: css`
    width: 100%;
    max-width: 42.5rem;
    margin: 1.6rem auto 0 auto;
  `
};

export default Styles;
