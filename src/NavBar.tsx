/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  accentColor,
  mediumLightGrayColor,
  lightGrayColor
} from "./global-styles/colors";
import SVGInline from "react-svg-inline";
import JoyStick from "./joystick.svg";
import Eye from "./eye.svg";
import { useContext, useState } from "react";
import {
  TerminalContext,
  TerminalActionDispatcher,
  TOGGLE_INTERACTIVE
} from "./TerminalContext";
import { motion } from "framer-motion";

function MainNavBar() {
  const { interactiveMode } = useContext(TerminalContext);
  const { dispatch } = useContext(TerminalActionDispatcher);
  const [isOverToggle, setIsOverToggle] = useState(false);
  return (
    <div
      css={css`
        display: none;

        @media only screen and (min-width: 640px) {
          display: flex;
          flex-flow: row wrap;
          flex: 0 0 92%;
          margin-left: 4%;
          justify-content: space-between;
          align-items: center;
          height: 15vh;

          * {
            font-family: "Poppins", sans-serif;
          }
        }
      `}
    >
      <h2>carlojanea</h2>
      <div
        css={css`
          flex: 0 0 70%;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: flex-end;
        `}
      >
        {interactiveMode ? (
          <span
            css={css`
              font-size: 14px;
              flex: 0 0 60%;
              text-align: right;
              margin-right: 3%;
            `}
          >
            Navigate the site through a terminal.
          </span>
        ) : null}

        {/* toggle */}
        <div
          css={css`
            position: relative;
          `}
          onMouseOver={() => {
            setIsOverToggle(true);
          }}
          onFocus={() => {
            setIsOverToggle(true);
          }}
          onMouseLeave={() => {
            setIsOverToggle(false);
          }}
          onBlur={() => {
            setIsOverToggle(false);
          }}
        >
          <button
            role="switch"
            aria-checked={interactiveMode ? "true" : "false"}
            aria-describedby="tooltipForToggle"
            id="interactiveMode"
            css={css`
              border: none;
              padding: 0;
              width: 55px;
              background-color: ${interactiveMode
                ? accentColor
                : mediumLightGrayColor};
              border-radius: 40px;
              height: 30px;
              display: flex;
              align-items: center;
              position: relative;
              cursor: pointer;
              transition: all 0.5s ease;
            `}
            onClick={() => {
              dispatch({
                type: TOGGLE_INTERACTIVE,
                payload: {}
              });
            }}
          >
            <div
              css={css`
                flex: 0 0 70%;
                margin-left: 15%;
                display: flex;
                ${interactiveMode
                  ? "justify-content: flex-start;"
                  : "justify-content: flex-end;"}
              `}
            >
              <SVGInline
                height="14px"
                width="14px"
                css={css`
                  display: flex;
                  align-items: center;
                `}
                svg={interactiveMode ? JoyStick : Eye}
              />
            </div>

            <motion.div
              positionTransition
              css={css`
                width: 20px;
                height: 20px;
                background-color: white;
                border-radius: 50%;
                position: absolute;
                ${interactiveMode ? "right: 5px;" : "left: 5px;"}
              `}
            ></motion.div>
          </button>
          <label
            htmlFor="interactiveMode"
            id="tooltipForToggle"
            role="tooltip"
            aria-hidden={isOverToggle ? "false" : "true"}
            css={css`
              position: absolute;
              background-color: ${lightGrayColor};
              color: white;
              bottom: 0;
              left: 50%;
              text-align: center;
              font-size: 12px;
              padding: 5px 10px;
              border-radius: 5px;
              transform: translate(-50%, 120%);

              @media only screen and (min-width: 1024px) {
                white-space: nowrap;
              }

              &:before {
                content: "";
                position: absolute;
                left: 50%;
                top: 0;
                transform: translate(-50%, -98%);
                border-bottom: 8px solid ${lightGrayColor};
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
              }

              &[aria-hidden="true"] {
                display: none;
              }
              &[aria-hidden="false"] {
                display: flex;
              }
            `}
          >
            {interactiveMode ? "Interactive Mode" : "Non-interactive Mode"}
          </label>
        </div>
      </div>
    </div>
  );
}

export default MainNavBar;
