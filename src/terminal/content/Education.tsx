/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { dirtyWhiteColor, accentColor } from "../../global-styles/colors";
import { TerminalTable, LeftSide, RightSide } from "./terminal-table";

function Education() {
  const education = [
    {
      key: "Bachelor's Degree",
      value: [
        "Bachelor of Science in Computer Science",
        "University of San Carlos",
        "2015 - 2018",
        `
          <div>- Magna Cum Laude</div>
          <div>- Consistent Dean's Lister</div>
          <div>- Top 4 DS Lister in Data Structures</div>
          <div>- Graduated with a 1.25 GWA</div>
        `
      ]
    },
    {
      key: "Secondary Education",
      value: [
        "St. Joseph's Academy",
        "2011 - 2015",
        `
          <div>- Consistent Honor Student</div>
          <div>- Graduated 3rd Honorable Mention</div>
        `
      ]
    }
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
      <TerminalTable tableTitle={"Carlo Janea's Education"}>
        {education.map(pastEducation => {
          return (
            <div
              key={pastEducation.key}
              css={css`
                flex: 0 0 100%;
                display: flex;
                flex-flow: row wrap;
                margin-bottom: 4%;
              `}
            >
              <LeftSide>{pastEducation.key}</LeftSide>
              <RightSide>
                {pastEducation.value.map((detail, index) => {
                  return (
                    <div
                      key={detail}
                      className={index === 0 ? "semi-bold" : ""}
                      css={css`
                        margin-bottom: 5%;
                        color: ${index == 0 ? accentColor : "inherit"};
                      `}
                      dangerouslySetInnerHTML={{ __html: detail }}
                    ></div>
                  );
                })}
              </RightSide>
            </div>
          );
        })}
      </TerminalTable>
    </div>
  );
}

export default Education;
