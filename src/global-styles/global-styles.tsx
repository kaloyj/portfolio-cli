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
            height: 100vh;
            overflow: hidden;
            align-content: flex-start;
            perspective: 1500px;
            border: 3px solid black;
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
