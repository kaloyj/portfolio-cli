/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { dirtyWhiteColor, redColor } from "../../global-styles/colors";
import { TerminalTable, LeftSide, RightSide } from "./terminal-table";

function Experience() {
  const experiences = [
    {
      key: "Caresharing",
      value: [
        "React Front End Engineer",
        "January 2020 - Present",
        "To be determined"
      ]
    },
    {
      key: "Fullscale",
      value: [
        "Front End Developer",
        "January 2019 - December 2019",
        `Handled <span class="emphasize">Vue</span> and <span class="emphasize">React</span> projects. Worked on an employee database application, and maintained and improved a virtual summits application.`
      ]
    },
    {
      key: "Coding Ave.",
      value: [
        "On the Job Trainee",
        "April 2018 - August 2018",
        `Maintained a learning application using <span class="emphasize">React</span> and <span class="emphasize">PHP</span>`
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
      <TerminalTable tableTitle={"Carlo Janea's Experience"}>
        {experiences.map(experience => {
          return (
            <div
              key={experience.key}
              css={css`
                flex: 0 0 100%;
                display: flex;
                flex-flow: row wrap;
                margin-bottom: 4%;
              `}
            >
              <LeftSide>{experience.key}</LeftSide>
              <RightSide>
                {experience.value.map((detail, index) => {
                  return (
                    <div
                      key={detail}
                      className={index === 0 ? "semi-bold" : ""}
                      css={css`
                        margin-bottom: 5%;
                        width: 100%;
                        color: ${index == 0 ? redColor : "inherit"};
                        .emphasize {
                          color: ${redColor};
                          font-weight: 600;
                          display: inline-block;
                        }
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

export default Experience;
