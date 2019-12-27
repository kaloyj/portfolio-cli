/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LinePrefix from "./LinePrefix";
import { dirtyWhiteColor } from "../global-styles/colors";
import { useContext, KeyboardEvent } from "react";
import {
  TerminalActionDispatcher,
  mainKeyword,
  LOG,
  CLEAR
} from "../TerminalContext";

function NewLine() {
  const { dispatch } = useContext(TerminalActionDispatcher);

  return (
    <div
      className="flex-parent terminal-nav-bar"
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
          aria-label="enter command in terminal new line"
          css={css`
            width: 100%;
            background-color: transparent;
            border: none;
            color: ${dirtyWhiteColor};
          `}
          onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              let blocks = parseLine(e.currentTarget.value);

              if (blocks[0] === CLEAR) {
                dispatch({
                  type: CLEAR,
                  payload: {
                    lines: [e.currentTarget.value]
                  }
                });
              } else if (blocks[0] !== mainKeyword) {
                dispatch({
                  type: LOG,
                  payload: {
                    lines: [
                      e.currentTarget.value,
                      `Undefined keyword '${blocks[0]}'. Did you mean 'portfolio'?`
                    ]
                  }
                });
              } else {
                dispatch({
                  type: blocks[1],
                  payload: {
                    lines: [e.currentTarget.value],
                    selection: blocks[2]
                  }
                });
              }

              e.currentTarget.value = "";
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
