/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent } from "react";

// this table is divided 30 - 70
const RightSide: FunctionComponent = ({ children }) => {
  return (
    <span
      css={css`
        flex: 0 0 66%;
        display: flex;
        flex-flow: row wrap;
        margin-left: 4%;
      `}
    >
      {children}
    </span>
  );
};

export default RightSide;
