import React from "react";
import { Global, css } from "@emotion/core";

export const mainFontColor = "#1B1725";
export const accentColor = "#623CEA";
export const redColor = "#EF476F";
export const yellowColor = "#F3C969";
export const lightBlueColor = "#80CED7";
export const deeperBlueColor = "#01BAEF";
export const lightGrayColor = "#534B62";
export const mediumLightGrayColor = "#bfbfbf";
export const superLightGrayColor = "#cccccc";

export const dirtyWhiteColor = "#F7EBEC";

function Colors() {
  return (
    <Global
      styles={css`
        .red-color {
          color: ${redColor};
        }

        .accent-color {
          color: ${accentColor};
        }

        .yellow-color {
          color: ${yellowColor};
        }

        .light-blue-color {
          color: ${lightBlueColor};
        }

        .deeper-blue-color {
          color: ${deeperBlueColor};
        }

        .light-gray-color {
          color: ${lightGrayColor};
        }
      `}
    ></Global>
  );
}

export default Colors;
