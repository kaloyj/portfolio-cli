/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { accentColor } from "../global-styles/colors";

function Details() {
  const tech = ["React", "Typescript", "Redux"];
  return (
    <div
      className="flex-1"
      css={css`
        margin-top: 8%;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-flow: row wrap;
          flex: 0 0 100%;
        `}
      >
        <h2>Work #1</h2>
        <div
          css={css`
            flex: 0 0 100%;
            display: flex;
            flex-flow: row wrap;
            margin-left: 1px;
          `}
        >
          {tech.map((techItem, index) => (
            <span
              key={techItem}
              css={css`
                flex: 0 1 auto;
                display: flex;
                align-items: center;
              `}
            >
              <span
                css={css`
                  font-size: 12px;
                `}
              >
                {techItem}
              </span>
              {index < tech.length - 1 ? (
                <div
                  css={css`
                    display: inline-block;
                    margin: 0 5px;
                    width: 6px;
                    height: 6px;
                    background-color: ${accentColor};
                    border-radius: 50%;
                  `}
                ></div>
              ) : null}
            </span>
          ))}
        </div>
      </div>
      <div
        css={css`
          flex: 0 0 100%;
          margin-top: 4%;
          height: 220px;
          overflow: hidden;
          border-radius: 15px;
        `}
      >
        <img
          src="https://picsum.photos/200/300"
          alt="work preview"
          css={css`
            height: 100%;
            width: 100%;
            object-fit: cover;
          `}
        ></img>
      </div>

      <div
        css={css`
          flex: 0 0 100%;
          margin-top: 4%;
          margin-left: 1px;
        `}
      >
        description
      </div>
    </div>
  );
}

export default Details;
