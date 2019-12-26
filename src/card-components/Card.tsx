/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useContext } from "react";
import SVGInline from "react-svg-inline";
import CloseButton from "./close-button.svg";
import { TerminalActionDispatcher, HIDE_CARD } from "../TerminalContext";

interface CardProps {
  cardTitle: string;
  allowClose?: boolean;
}
const Card: FunctionComponent<CardProps> = ({
  children,
  cardTitle,
  allowClose = true
}) => {
  const { dispatch } = useContext(TerminalActionDispatcher);
  return (
    <div
      className="flex-parent"
      css={css`
        min-height: 100vh;
        width: 100vw;
        align-content: flex-start;
        background-color: white;
        * {
          font-family: "Poppins", sans-serif;
        }
      `}
    >
      <div
        className="flex-1"
        css={css`
          align-content: flex-start;
          justify-content: space-between;
          align-items: center;
          margin-top: 2%;
        `}
      >
        <h1>{cardTitle}</h1>
        {allowClose ? (
          <button
            css={css`
              border: none;
              background: transparent;
              cursor: pointer;
            `}
            onClick={() => {
              dispatch({
                type: HIDE_CARD,
                payload: {}
              });
            }}
          >
            <SVGInline
              height="14px"
              width="14px"
              css={css`
                display: flex;
                align-items: center;
              `}
              svg={CloseButton}
            />
          </button>
        ) : null}
      </div>

      {children}
    </div>
  );
};

export default Card;
