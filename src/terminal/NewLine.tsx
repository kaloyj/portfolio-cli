/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LinePrefix from "./LinePrefix";
import { dirtyWhiteColor } from "../global-styles/colors";

function NewLine() {
  return (
    <div
      className="flex-parent"
      css={css`
        width: 100%;
        background-color: transparent;
        align-items: center;
      `}
    >
      <LinePrefix></LinePrefix>
      <div
        className="flex-parent"
        css={css`
          flex: 1 0 auto;
          background-color: transparent;
          margin-left: 5px;
        `}
      >
        <input
          css={css`
            width: 100%;
            background-color: transparent;
            border: none;
            color: ${dirtyWhiteColor};
          `}
        ></input>
      </div>
    </div>
  );
}

export default NewLine;
