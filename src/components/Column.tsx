import styled, { css } from "styled-components";

interface ColumnProps {
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export const Column = styled.div<ColumnProps>`
  ${({ lg }) =>
    lg === 1 &&
    css`
      width: 8.33%;
    `}

  ${({ lg }) =>
    lg === 2 &&
    css`
      width: 16.66%;
    `}
  
  ${({ lg }) =>
    lg === 3 &&
    css`
      width: 25%;
    `}
  
  ${({ lg }) =>
    lg === 4 &&
    css`
      width: 33.33%;
    `}

  ${({ lg }) =>
    lg === 5 &&
    css`
      width: 41.66%;
    `}

  ${({ lg }) =>
    lg === 6 &&
    css`
      width: 50%;
    `}

  ${({ lg }) =>
    lg === 7 &&
    css`
      width: 58.33%;
    `}

  ${({ lg }) =>
    lg === 8 &&
    css`
      width: 66.66%;
    `}

  ${({ lg }) =>
    lg === 9 &&
    css`
      width: 75%;
    `}

  ${({ lg }) =>
    lg === 10 &&
    css`
      width: 83.33%;
    `}

  ${({ lg }) =>
    lg === 11 &&
    css`
      width: 91.66%;
    `}

  ${({ lg }) =>
    lg === 12 &&
    css`
      width: 100%;
    `}

    @media only screen and (max-width: 1280px) {
    ${({ md }) =>
      md === 1 &&
      css`
        width: 8.33%;
      `}

    ${({ md }) =>
      md === 2 &&
      css`
        width: 16.66%;
      `}
  
  ${({ md }) =>
      md === 3 &&
      css`
        width: 25%;
      `}
  
  ${({ md }) =>
      md === 4 &&
      css`
        width: 33.33%;
      `}

  ${({ md }) =>
      md === 5 &&
      css`
        width: 41.66%;
      `}

  ${({ md }) =>
      md === 6 &&
      css`
        width: 50%;
      `}

  ${({ md }) =>
      md === 7 &&
      css`
        width: 58.33%;
      `}

  ${({ md }) =>
      md === 8 &&
      css`
        width: 66.66%;
      `}

  ${({ md }) =>
      md === 9 &&
      css`
        width: 75%;
      `}

  ${({ md }) =>
      md === 10 &&
      css`
        width: 83.33%;
      `}

  ${({ md }) =>
      md === 11 &&
      css`
        width: 91.66%;
      `}

  ${({ md }) =>
      md === 12 &&
      css`
        width: 100%;
      `}
  }

  @media only screen and (max-width: 500px) {
    ${({ lg }) =>
      lg === 1 &&
      css`
        width: 8.33%;
      `}

    ${({ lg }) =>
      lg === 2 &&
      css`
        width: 16.66%;
      `}
  
  ${({ lg }) =>
      lg === 3 &&
      css`
        width: 25%;
      `}
  
  ${({ lg }) =>
      lg === 4 &&
      css`
        width: 33.33%;
      `}

  ${({ lg }) =>
      lg === 5 &&
      css`
        width: 41.66%;
      `}

  ${({ lg }) =>
      lg === 6 &&
      css`
        width: 50%;
      `}

  ${({ lg }) =>
      lg === 7 &&
      css`
        width: 58.33%;
      `}

  ${({ lg }) =>
      lg === 8 &&
      css`
        width: 66.66%;
      `}

  ${({ lg }) =>
      lg === 9 &&
      css`
        width: 75%;
      `}

  ${({ lg }) =>
      lg === 10 &&
      css`
        width: 83.33%;
      `}

  ${({ lg }) =>
      lg === 11 &&
      css`
        width: 91.66%;
      `}

  ${({ lg }) =>
      lg === 12 &&
      css`
        width: 100%;
      `}

    @media only screen and (max-width: 1280px) {
      ${({ sm }) =>
        sm === 1 &&
        css`
          width: 8.33%;
        `}

      ${({ sm }) =>
        sm === 2 &&
        css`
          width: 16.66%;
        `}
  
      ${({ sm }) =>
        sm === 3 &&
        css`
          width: 25%;
        `}
  
  ${({ sm }) =>
        sm === 4 &&
        css`
          width: 33.33%;
        `}

  ${({ sm }) =>
        sm === 5 &&
        css`
          width: 41.66%;
        `}

  ${({ sm }) =>
        sm === 6 &&
        css`
          width: 50%;
        `}

  ${({ sm }) =>
        sm === 7 &&
        css`
          width: 58.33%;
        `}

  ${({ sm }) =>
        sm === 8 &&
        css`
          width: 66.66%;
        `}

  ${({ sm }) =>
        sm === 9 &&
        css`
          width: 75%;
        `}

  ${({ sm }) =>
        sm === 10 &&
        css`
          width: 83.33%;
        `}

  ${({ sm }) =>
        sm === 11 &&
        css`
          width: 91.66%;
        `}

  ${({ sm }) =>
        sm === 12 &&
        css`
          width: 100%;
        `}
    }
  }
`;
