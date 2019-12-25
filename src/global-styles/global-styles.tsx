import React from "react";
import { Colors, Flex, Typography } from ".";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <div>
      <Global
        styles={css`
          body {
            margin: 0;
            width: 100vw;
            overflow-x: hidden;
          }

          *,
          *:after,
          *:before {
            box-sizing: border-box;
          }

          .main-body {
            border: 3px solid yellow;
            min-height: 100vh;
            align-content: flex-start;
          }
        `}
      ></Global>
      <Typography></Typography>
      <Colors></Colors>
      <Flex></Flex>
    </div>
  );
}

export default GlobalStyles;
