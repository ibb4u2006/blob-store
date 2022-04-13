export const WIDTHS = {
  xxs: 320,
  xs: 375,
  sm: 575,
  md: 768,
  lg: 991,
  xl: 1200,
  xxl: 1440,
};

export const mediaBreakpointUp = (min: number, content: string) => `
      @media (min-width: ${min}px) {
          ${content}
      }
  `;

export const mediaBreakpointDown = (max: number, content: string) => `
      @media (max-width: ${max}px) {
          ${content}
      }
  `;

export const mediaBreakpointBetween = (
  min: number,
  max: number,
  content: string
) => `
      @media (min-width: ${min}px) and (max-width: ${max}px) {
          ${content}
      }
  `;
