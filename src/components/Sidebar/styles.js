import { css } from "@emotion/react";

const Styles = {
  container: css`
    position: absolute;
    top: 50%;
    transition: all 0.3s ease;
    &.hide {
      transform: translate(-100%, 0);
      .indicator {
        transform: translate(-100%, 0);
      }
    }
  `,
  itemContainer: css``,
  item: css`
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 1.6rem;
    cursor: pointer;
    background-color: #f1f3f6;
    transition: all 0.2s ease;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    &:hover {
      background-color: #f1f3f6aa;
    }
    &:first-of-type {
      border-top-right-radius: 1rem;
    }
    &:last-of-type {
      border-bottom-right-radius: 1rem;
    }
  `,
  indicator: css`
    font-size: 2.2rem;
    font-weight: bold;
    background-color: #f1f3f6aa;
    padding: 0.4rem;
    border-radius: 0 1rem 1rem 0;
    display: grid;
    place-items: center;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: #f1f3f6aa;
    }
    &.hide {
      .indicator {
        transform: translate(-100%, 0);
      }
    }
    span {
      transition: all 0.2s ease;
      &.rotate {
        transform: rotate(180deg);
      }
    }
  `
};

export default Styles;
