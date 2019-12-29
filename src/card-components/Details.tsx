/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  accentColor,
  mainFontColor,
  lightGrayColor
} from "../global-styles/colors";
import { WorkItemProps } from "./work/Work";
import SVGInline from "react-svg-inline";
import Placeholder from "./work/photo-placeholder.svg";

function Details({ item }: { item: WorkItemProps }) {
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
        <h2>{item.name}</h2>
        <TechList tech={item.techList}></TechList>
      </div>
      <div
        css={css`
          display: flex;
          flex: 0 0 100%;
          margin-top: 4%;
          height: 220px;
          overflow: hidden;
          border-radius: 15px;
          background-color: ${lightGrayColor};
        `}
      >
        {item.preview ? (
          <img
            src={item.preview}
            alt={`${item.name} preview`}
            css={css`
              height: 100%;
              width: 100%;
              object-fit: cover;
            `}
          ></img>
        ) : (
          <SVGInline
            height="30px"
            width="30px"
            css={css`
              display: flex;
              flex: 0 0 100%;
              align-items: center;
              justify-content: center;
            `}
            svg={Placeholder}
          />
        )}
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

export function TechList({ tech }: { tech: Array<string> }) {
  return (
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
  );
}

export default Details;
