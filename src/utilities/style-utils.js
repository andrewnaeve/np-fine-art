import { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const media = {
  xs: (...args) => css`
    @media (min-width: 320px) {
      ${css(...args)};
    }
  `,
  s: (...args) => css`
    @media (min-width: 400px) {
      ${css(...args)};
    }
  `,
  m: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `,
  l: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (min-width: 1440px) {
      ${css(...args)};
    }
  `,
  xxl: (...args) => css`
    @media (min-width: 2560px) {
      ${css(...args)};
    }
  `
};
