/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { mainFontColor, dirtyWhiteColor } from "../global-styles/colors";
import TerminalNavBar from "./TerminalNavBar";
import NewLine from "./NewLine";
import { useContext, ElementType, useRef, useEffect } from "react";
import { TerminalContext } from "../TerminalContext";
import LinePrefix from "./LinePrefix";

function Terminal() {
  const { outputStack } = useContext(TerminalContext);
  const terminalRef = useRef(null);

  useEffect(() => {
    terminalRef.current.scrollTop =
      terminalRef.current.scrollHeight - terminalRef.current.clientHeight;
  }, [outputStack]);

  return (
    <div
      className="flex-parent"
      css={css`
        width: 100%;
        height: 100vh;
        overflow: hidden;
        align-content: flex-start;
        background-color: ${mainFontColor};
      `}
    >
      <TerminalNavBar></TerminalNavBar>

      {/* terminal body */}
      <div
        ref={terminalRef}
        className="flex-1"
        css={css`
          margin: 0;
          flex: 0 0 100%;
          padding: 0;
          height: 97%;
          overflow: auto;
          background-color: ${mainFontColor};
          padding-bottom: 20px;
          padding-top: 10px;
          align-content: flex-start;
        `}
      >
        {outputStack.map((stackData, index) => (
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
            {index % 2 == 0 ? <LinePrefix></LinePrefix> : null}

            <span
              css={css`
                color: ${dirtyWhiteColor};
                display: inline;
              `}
            >
              {renderData(stackData)}
            </span>
          </div>
        ))}
        <NewLine></NewLine>
      </div>
    </div>
  );
}

function renderData(stackObj: {
  type: "string" | "component";
  data: string | ElementType;
}) {
  let DataComponent;
  switch (stackObj.type) {
    case "string":
      return stackObj.data;
    case "component":
      DataComponent = stackObj.data;
      return <DataComponent></DataComponent>;
  }
}

export default Terminal;
