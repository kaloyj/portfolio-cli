/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Card from "./Card";
import { TechList } from "./Details";

function Resume() {
  const tech = ["React", "Accessibility", "UI/UX", "Rails"];
  const socials = ["a", "b", "c", "d", "e"];
  return (
    <Card cardTitle="Resume">
      <div
        className="flex-parent"
        css={css`
          flex: 0 0 100%;
        `}
      >
        {/* resume header */}
        <div
          css={css`
            display: flex;
            flex-flow: row wrap;
            flex: 0 0 92%;
            margin-left: 4%;
            margin-top: 2%;
            align-items: center;
          `}
        >
          <img
            src="https://picsum.photos/200/300"
            alt="carlo janea's pic"
            css={css`
              width: 80px;
              height: 80px;
              border-radius: 50%;
              object-fit: cover;
            `}
          ></img>
          <div
            css={css`
              flex: 1 0 auto;
              margin-left: 4%;
            `}
          >
            <h3>Carlo Janea</h3>
            <span
              css={css`
                font-size: 12px;
                margin-left: 1px;
              `}
            >
              Software Developer
            </span>
            <TechList tech={tech}></TechList>
            <div
              css={css`
                display: flex;
                flex-flow: row wrap;
                width: 100%;
                margin-top: 2%;
                margin-left: 1px;
              `}
            >
              {socials.map(contact => (
                <div
                  key={contact}
                  css={css`
                    height: 20px;
                    width: 20px;
                    border: 1px solid black;
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                    justify-content: center;
                    margin-right: 5px;
                  `}
                >
                  {contact}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Resume;
