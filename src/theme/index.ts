import COLORS from "./color";
import * as styledComponents from "styled-components";
import * as Breakpoints from "./breakpoints";
import { ITheme } from "../utils/interface";

const Theme: ITheme = {
  colors: {
    ...COLORS,
  },
  breakpoints: {
    widths: { ...Breakpoints.WIDTHS },
    mediaBreakpointUp: Breakpoints.mediaBreakpointUp,
    mediaBreakpointDown: Breakpoints.mediaBreakpointDown,
    mediaBreakpointBetween: Breakpoints.mediaBreakpointBetween,
  },
};

const {
  default: styled,
  css,
  ThemeProvider,
  createGlobalStyle,
} = styledComponents as any;

export { css, Theme, ThemeProvider, createGlobalStyle, Breakpoints };
export default styled;
