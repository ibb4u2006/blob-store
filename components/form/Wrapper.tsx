import { Form } from "react-bootstrap";
import styled, { Breakpoints, css } from "../../theme";
import { IThemeProp } from "../../utils/interface";

export const FormWrapper = styled(Form)`
  button {
    width: 100%;
    padding: 0.75rem 0;
  }
  div {
    > input#dismissable {
      width: 2em;
      height: 2em;
    }
    > input#primaryColor {
      &.form-control:valid {
        width: 5rem;
      }
    }
  }
  div.form-switch {
    > input#darkMode {
      width: 6em;
      height: 2em;
      &.form-check-input:checked,
      &.form-check-input:checked:focus {
        border-color: ${(props: IThemeProp) => props.theme.colors.dark};
        background-color: ${(props: IThemeProp) => props.theme.colors.dark};
        background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e");
      }
      &.form-check-input:focus {
        background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e");
      }
      &.form-check-input,
      &.form-check-input:focus {
        border-color: ${(props: IThemeProp) => props.theme.colors.darkGrey};
        box-shadow: none;
      }
    }
  }
  ${Breakpoints.mediaBreakpointUp(
    Breakpoints.WIDTHS.lg,
    css`
      .container {
        padding: 0 10rem;
      }
    `
  )}
  ${Breakpoints.mediaBreakpointBetween(
    Breakpoints.WIDTHS.xs,
    Breakpoints.WIDTHS.sm,
    css`
      .container {
        padding: 0 3rem;
      }
    `
  )}
  ${Breakpoints.mediaBreakpointDown(
    Breakpoints.WIDTHS.sm,
    css`
      button {
        width: 100%;
      }
    `
  )}
`;
