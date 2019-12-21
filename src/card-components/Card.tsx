/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent } from "react";
import SVGInline from "react-svg-inline";
import CloseButton from "./close-button.svg";

interface CardProps {
  cardTitle: string;
  allowClose?: boolean;
}
const Card: FunctionComponent<CardProps> = ({
  children,
  cardTitle,
  allowClose = true
}) => {
  return (
    <div
      className="flex-parent"
      css={css`
        min-height: 100vh;
        width: 100vw;
        border: 1px solid black;
        align-content: flex-start;
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
