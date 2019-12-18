/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { lightGrayColor, mainFontColor } from "../global-styles/colors";
import TerminalNavBar from "./TerminalNavBar";
import LinePrefix from "./LinePrefix";
import NewLine from "./NewLine";

function Terminal() {
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
        <LinePrefix></LinePrefix>
        <NewLine></NewLine>
        <NewLine></NewLine>
      </div>
    </div>
  );
}

export default Terminal;
