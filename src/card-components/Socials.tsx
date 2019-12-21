/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { lightGrayColor, dirtyWhiteColor } from "../global-styles/colors";

function Socials() {
  const socials = ["A", "S", "M", "R"];
  return (
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        flex: 0 0 calc(100% - 4px);
        margin-left: 2px;
        margin-top: 1%;
      `}
    >
      <h3>Socials</h3>
      <div
        css={css`
          flex: 0 0 100%;
          display: flex;
          flex-flow: row wrap;
          margin-top: 2%;
        `}
      ></div>
      {socials.map(contact => (
        <div
          key={contact}
          css={css`
            background-color: ${lightGrayColor};
            width: 60px;
            height: 60px;
            border-radius: 8px;
            display: flex;
            flex-flow: row wrap;
            margin-right: 5px;
            align-items: center;
            justify-content: center;
            color: ${dirtyWhiteColor};
            font-weight: 600;
          `}
        >
          {contact}
        </div>
      ))}
    </div>
  );
}

export default Socials;
