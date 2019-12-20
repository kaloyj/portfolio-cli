/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent } from "react";

// this table is divided 30 - 70
const LeftSide: FunctionComponent = ({ children }) => {
  return (
    <span
      css={css`
        flex: 0 0 30%;
      `}
    >
      {children}
    </span>
  );
};

export default LeftSide;
