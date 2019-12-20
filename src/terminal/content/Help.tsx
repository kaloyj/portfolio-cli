/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { dirtyWhiteColor } from "../../global-styles/colors";
import { TerminalTable, LeftSide, RightSide } from "./terminal-table";

function Help() {
  const commands = [
    {
      key: "-s --show",
      value: "Shows the deets and infos regarding the inputted selection"
    },
    { key: "-h --help", value: "Prints usage." },
    { key: "-v --version", value: "Prints version." }
  ];

  const selections = [
    {
      key: "-a --all",
      value: "Select all of cjanea's information."
    },
    { key: "-b --blog", value: "Select cjanea's blog." },
    { key: "-c --contact", value: "Select cjanea's contact info." },
    { key: "-e --edu", value: "Select cjanea's education." },
    { key: "-E --exp", value: "Select cjanea's experience." },
    { key: "-H --hobbies", value: "Select cjanea's hobbies." },
    { key: "-r --resume", value: "Select cjanea's resume." },
    { key: "-w --work", value: "Select cjanea's work showcase." },
    { key: "-t --tech", value: "Select cjanea's tech skills" }
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
      <span
        css={css`
          flex: 0 0 100%;
          margin-bottom: 5%;
        `}
      >
        Carlo Janea&apos;s Portfolio
      </span>
      <span
        css={css`
          flex: 0 0 100%;
          margin-bottom: 5%;
        `}
      >
        Usage: portfolio [command] [selection]
      </span>

      {/* Commands */}
      <TerminalTable tableTitle={"Commands:"}>
        {commands.map(command => {
          return (
            <div
              key={command.key}
              css={css`
                flex: 0 0 100%;
                display: flex;
                flex-flow: row wrap;
                margin-bottom: 4%;
              `}
            >
              <LeftSide>{command.key}</LeftSide>
              <RightSide>{command.value}</RightSide>
            </div>
          );
        })}
      </TerminalTable>
      <TerminalTable tableTitle={"Selections:"}>
        {selections.map(selection => {
          return (
            <div
              key={selection.key}
              css={css`
                flex: 0 0 100%;
                display: flex;
                flex-flow: row wrap;
                margin-bottom: 4%;
              `}
            >
              <LeftSide>{selection.key}</LeftSide>
              <RightSide>{selection.value}</RightSide>
            </div>
          );
        })}
      </TerminalTable>

      {/* Selections */}
    </div>
  );
}

export default Help;
