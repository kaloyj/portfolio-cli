/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  lightGrayColor,
  mainFontColor,
  dirtyWhiteColor
} from "../global-styles/colors";
import TerminalNavBar from "./TerminalNavBar";
import NewLine from "./NewLine";
import { Skills } from "./content";
import { useContext } from "react";
import { TerminalContext } from "../TerminalContext";
import LinePrefix from "./LinePrefix";

function Terminal() {
  const { outputStack } = useContext(TerminalContext);

  console.log({ outputStack });
  return (
    <div
      className="flex-parent"
      css={css`
        width: 100%;
        background-color: ${lightGrayColor};
      `}
    >
      <TerminalNavBar></TerminalNavBar>

      {/* terminal body */}
      <div
        className="flex-1"
        css={css`
          margin: 0;
          flex: 0 0 100%;
          padding: 0;
          height: 100vh;
          background-color: ${mainFontColor};
          align-content: flex-start;
        `}
      >
        {outputStack.map((line, index) => (
          <div
            key={index}
            css={css`
              display: flex;
              flex-flow: row wrap;
              flex: 0 0 100%;
              span {
                margin-left: 5px;
              }
            `}
          >
            <LinePrefix></LinePrefix>
            <span
              css={css`
                color: ${dirtyWhiteColor};
                display: inline;
              `}
            >
              {line}
            </span>
          </div>
        ))}
        <NewLine></NewLine>
      </div>
    </div>
  );
}

export default Terminal;
