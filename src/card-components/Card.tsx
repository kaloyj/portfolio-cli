/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent } from "react";

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
        flex: 0 0 100%;
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
            <span
              css={css`
                font-weight: 300;
                font-size: 24px;
              `}
            >
              x
            </span>
          </button>
        ) : null}
      </div>

      {children}
    </div>
  );
};

export default Card;
