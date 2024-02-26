import { css } from "styled-components";

export const Hovers = {
  hover01: css`
    &:hover {
      background-color: #33399b;
      color: white;
      transition: all 0.7s;
    }
  `,
    hover02: css`
    &:hover {
      color: #33399b;
      transition: all 0.7s;
    }
    &:hover::after {
        border-left-color: #33399b;
        border-bottom-color: #33399b;
        transition: all 0.7s;
    }
  `,
    hover03: css`
    &:hover {
      background-color: #33399b;
      color: #fff;
      transition: all 0.7s;
    }
  `,
};
