/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent } from "react";

// this table is divided 30 - 70
const TerminalTable: FunctionComponent<{
  tableTitle: string;
}> = ({ tableTitle, children }) => {
  return (
    <div
      className="flex-parent"
      css={css`
        flex: 0 0 100%;
        margin-bottom: 8%;
      `}
    >
      <div
        css={css`
          width: 100%;
          margin-bottom: 2%;
        `}
      >
        {tableTitle}
      </div>
      {children}
    </div>
  );
};

export default TerminalTable;
