import { css } from "@emotion/react";
// import Color from "../../styles/base/color";

const Styles = {
  background: css`
    background: #00b4db; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #0083b0,
      #00b4db
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #0083b0,
      #00b4db
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
  `,
  pageTitle: css`
    color: white;
    font-family: var(--titleFont);
  `,
  header: css`
    display: flex;
    justify-content: center;
    position: relative;
    max-width: 102.4rem;
    margin: 0 auto;
  `,
  headerIcon: css`
    position: absolute;
    left: 0;
    span {
      cursor: pointer;
      color: white;
    }
  `,
  container: css`
    background-color: white;
    border-radius: 1rem 1rem 0 0;
    padding: 1.6rem;
    width: 100%;
    color: var(--primary);
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    max-width: 102.4rem;
    margin: 0 auto;
  `,
  element: css`
    position: relative;
  `,
  elementOrnamen: css`
    position: absolute;
    left: 0;
    bottom: 0;
  `,
  elementImageContainer: css`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.8rem;
  `,
  elementImage: css`
    width: 75%;
    height: auto;
    max-width: 12rem;
  `,
  elementName: css`
    font-size: 1.8rem;
    text-transform: capitalize;
  `,
  elementSpecies: css`
    font-size: 1.4rem;
    font-style: italic;
    text-transform: capitalize;
  `,
  empty: css`
    height: 100%;
    display: grid;
    place-content: center;
  `,
  emptyText: css`
    color: grey;
  `,
  button: css`
    margin-top: 1.6rem;
    width: 100%;
  `,
  section: css`
    display: grid;
    place-items: center;
    &:not(last-of-type) {
      margin-bottom: 1.6rem;
    }
  `
};

export default Styles;
