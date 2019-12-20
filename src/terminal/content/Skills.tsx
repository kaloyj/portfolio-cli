/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { dirtyWhiteColor, accentColor } from "../../global-styles/colors";

function Skills() {
  const skills = [
    "ReactJS",
    "TypeScript",
    "JavaScript, in general",
    "webpack",
    "Redux",
    "Cypress, Jest, and RSpec",
    "SVG",
    "Express",
    "GraphQL",
    "Ruby on Rails",
    "PostgreSQL"
  ];

  return (
    <div
      className="flex-parent"
      css={css`
        width: 96%;
        margin-left: 2%;
        margin-top: 5px;
        * {
          color: ${dirtyWhiteColor};
        }
      `}
    >
      <div>Carlo Janea&apos;s Technologies & Skills</div>
      {/* professional */}
      <div
        css={css`
          flex: 0 0 100%;
          margin-top: 4%;

          .prefix {
            color: ${accentColor};
            font-weight: 600;
            margin-right: 2%;
          }
        `}
      >
        {skills.map(skill => (
          <div
            key={skill}
            css={css`
              margin-bottom: 4%;
            `}
          >
            <span className="prefix">&gt;</span>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
