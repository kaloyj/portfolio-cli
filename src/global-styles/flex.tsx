import React from "react";
import { Global, css } from "@emotion/core";

function Flex() {
  return (
    <Global
      styles={css`
        .flex-parent {
          display: flex;
          flex-flow: row wrap;
        }

        .flex-1,
        .flex-2,
        .flex-3,
        .flex-4 {
          display: flex;
          flex-flow: row wrap;
          margin-left: 4%;
        }

        .flex-column {
          flex-flow: column wrap;
        }

        .flex-1 {
          flex: 0 0 92%;
        }

        .flex-2 {
          flex: 0 0 44%;
        }

        .flex-3 {
          flex: 0 0 28%;
        }

        .flex-4 {
          flex: 0 0 20%;
        }
      `}
    ></Global>
  );
}

export default Flex;
