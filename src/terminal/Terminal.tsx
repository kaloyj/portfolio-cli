/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { mainFontColor, dirtyWhiteColor } from "../global-styles/colors";
import TerminalNavBar from "./TerminalNavBar";
import NewLine from "./NewLine";
import { useContext, ElementType, useRef, useEffect } from "react";
import {
  TerminalContext,
  TerminalActionDispatcher,
  SWITCH_VIEW
} from "../TerminalContext";
import LinePrefix from "./LinePrefix";

function Terminal() {
  const { outputStack, showCard, selectedView } = useContext(TerminalContext);
  const { dispatch } = useContext(TerminalActionDispatcher);
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

        @media only screen and (min-width: 640px) {
          width: 80%;
          margin-left: 10%;
          height: 65vh;
          align-items: center;
          justify-content: center;
          margin-top: 5vh;
          cursor: pointer;
          transition: all 0.5s ease;
          z-index: ${selectedView === "terminal" ? 1 : "auto"};
          box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.3),
            0px 2px 20px 0px rgba(0, 0, 0, 0.35);

          ${showCard
            ? ` width: 70vw;
                justify-content: flex-start;
                margin-top: 2.5vh;
                margin-left: 4%;
                height: 50vh;
              `
            : ""}

          ${showCard && selectedView !== "terminal"
            ? ` transform: scale(0.9);
                z-index: -1;

                &:hover,
                &:focus {
                  transform: scale(0.9)
                }
              `
            : ""};
        }

        @media only screen and (min-width: 1024px) {
          ${showCard
            ? ` width: 50vw;
                  justify-content: flex-start;
                  margin-left: 4%;
                  height: 50vh;
                `
            : ""}
          ${showCard && selectedView !== "terminal"
            ? ` transform: rotateY(40deg);
                z-index: -1;
              `
            : ""};

          &:hover,
          &:focus {
            ${showCard && selectedView !== "terminal"
              ? `transform: scale(1.035) rotateY(30deg)`
              : ""}
          }
        }
      `}
      onClick={() => {
        showCard
          ? dispatch({
              type: SWITCH_VIEW,
              payload: "terminal"
            })
          : null;
      }}
      onKeyPress={() => {
        showCard
          ? dispatch({
              type: SWITCH_VIEW,
              payload: "terminal"
            })
          : null;
      }}
      role="menuitem"
      id="item-1"
      tabIndex={0}
    >
      <TerminalNavBar></TerminalNavBar>

      {/* terminal body */}
      <div
        ref={terminalRef}
        className="flex-1 terminal-body"
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
