/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LinePrefix from "./LinePrefix";
import { dirtyWhiteColor } from "../global-styles/colors";
import { useContext } from "react";
import { TerminalActionDispatcher } from "../TerminalContext";

function NewLine() {
  const { dispatch } = useContext(TerminalActionDispatcher);

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
          width: auto;
          background-color: transparent;
          margin-left: 5px;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
        `}
      >
        <input
          css={css`
            width: 100%;
            background-color: transparent;
            border: none;
            color: ${dirtyWhiteColor};
          `}
          onKeyPress={e => {
            if (e.key === "Enter") {
              let blocks = parseLine(e.target.value);
              dispatch({ type: blocks[1], payload: e.target.value });
              e.target.value = "";
            }
          }}
        ></input>
      </div>
    </div>
  );
}

function parseLine(lineString: string) {
  let stringBlocks = lineString.split(" ");
  return stringBlocks;
}

export default NewLine;
