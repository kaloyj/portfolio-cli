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
          }

          *,
          *:after,
          *:before {
            box-sizing: border-box;
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
