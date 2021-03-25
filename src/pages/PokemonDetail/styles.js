import { css } from "@emotion/react";
import { animatePokeball } from "../../styles/base/animation";

const Styles = {
  background: css`
    background-color: var(--grey);
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
  `,
  hide: css`
    visibility: hidden;
  `,
  header: css`
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-items: center;
    max-width: 102.4rem;
    margin: 0 auto;
  `,
  headerIcon: css`
    cursor: pointer;
  `,
  pageTitle: css`
    color: black;
    font-family: var(--titleFont);
    text-transform: capitalize;
  `,
  container: css`
    background-color: white;
    border-radius: 1rem 1rem 0 0;
    padding: 1.6rem;
    width: 100%;
    color: var(--primary);
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    max-width: 102.4rem;
    margin: 0 auto;
  `,
  pokemonName: css`
    font-size: 1.4rem;
    text-transform: capitalize;
  `,
  section: css`
    &:not(last-of-type) {
      margin-bottom: 1.6rem;
    }
  `,
  sectionTitle: css`
    margin-bottom: 0.8rem;
  `,
  floatButton: css`
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 1.6rem;
    @media (min-width: 1024px) {
      right: calc((100% - 102.4rem) / 2);
    }
    img {
      width: 6.4rem;
      cursor: pointer;
      &.animate {
        animation: ${animatePokeball} 1s infinite;
      }
    }
  `,
  button: css`
    width: 100%;
  `,
  pokeballContainer: css`
    display: grid;
    place-items: center;
    height: 100%;
  `,
  animate: css`
    animation: ${animatePokeball} 0.5s infinite;
  `,
  input: css`
    width: 100%;
    margin-bottom: 0.8rem;
  `,
  inputLabel: css`
    font-weight: bold;
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    font-family: var(--titleFont);
  `,
  errorMessage: css`
    color: var(--danger);
    margin-bottom: 0.8rem;
  `,
  pokeball: css``,
  info: css`
    max-width: 102.4rem;
    margin: 0 auto;
  `
};

export default Styles;
