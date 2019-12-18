import React from "react";
import { Global, css } from "@emotion/core";
import { mainFontColor } from "./colors";

export const fontSizeBase = 14;
function Typography() {
  return (
    <Global
      styles={css`
        *,
        *:after,
        *:before {
          font-family: "Source Code Pro", monospace;
          color: ${mainFontColor};
          font-size: ${fontSizeBase}px;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }

        h1 {
          font-size: 36px;
        }

        h2 {
          font-size: 24px;
        }

        h3 {
          font-size: 16px;
        }

        h4 {
          font-size: 12px;
        }

        h5,
        h6 {
          font-size: 10px;
        }

        .semi-bold {
          font-weight: 600;
        }

        .light {
          font-weight: 300;
        }
      `}
    />
  );
}

export default Typography;
