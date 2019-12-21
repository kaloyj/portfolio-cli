/** @jsx jsx */
import { jsx, css } from "@emotion/core";

function LinePrefix() {
  return (
    <div
      className="flex-parent"
      css={css`
        flex: 0 1 auto;
        width: auto;
        background-color: transparent;

        span {
          margin-left: 5px;
        }
      `}
    >
      <span className="deeper-blue-color semi-bold">~</span>
      <span className="yellow-color semi-bold">&gt;</span>
    </div>
  );
}

export default LinePrefix;
