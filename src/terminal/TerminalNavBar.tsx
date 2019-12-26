/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { lightGrayColor } from "../global-styles/colors";

function TerminalNavBar() {
  return (
    <div
      className="flex-parent terminal-nav-bar"
      css={css`
        width: 100%;
        background-color: ${lightGrayColor};
      `}
    >
      {/* terminal nav bar */}
      <div
        className="flex-1"
        css={css`
          margin: 0;
          flex: 0 0 100%;
          padding: 0;
          position: relative;
        `}
      >
        <div
          css={css`
            flex: 0 1 auto;
            color: white;
            display: flex;
            flex-flow: row wrap;
            padding: 4px 0;

            .term-buttons {
              flex: 0 1 auto;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              margin-left: 5px;
              color: ${lightGrayColor};
              font-size: 8px;
              display: flex;
              flex-flow: row wrap;
              justify-content: center;
              align-items: center;
            }
          `}
        >
          <div
            className="term-buttons"
            css={css`
              background-color: #ff605c;
            `}
          >
            x
          </div>
          <div
            className="term-buttons"
            css={css`
              background-color: #6a607d;
            `}
          >
            m
          </div>
          <div
            className="term-buttons"
            css={css`
              background-color: #ffbd44;
            `}
          >
            r
          </div>
        </div>
        <div
          className="flex-1"
          css={css`
            margin: 0;
            width: 100%;
            height: 100%;
            justify-content: center;
            color: white;
            position: absolute;
            font-size: 12px;
            padding-top: 2px;
          `}
        >
          cjaneas-portfolio
        </div>
      </div>
    </div>
  );
}

export default TerminalNavBar;
