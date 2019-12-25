/** @jsx jsx */
import { jsx, css } from "@emotion/core";

function MainNavBar() {
  return (
    <div
      css={css`
        border: 3px solid black;
        display: none;

        @media only screen and (min-width: 640px) {
          display: flex;
          flex-flow: row wrap;
          flex: 0 0 100%;
        }
      `}
    >
      i am a navbar
    </div>
  );
}

export default MainNavBar;
