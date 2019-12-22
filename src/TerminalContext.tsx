import React, {
  createContext,
  useReducer,
  FunctionComponent,
  ElementType
} from "react";
import {
  Help,
  Education,
  Experience,
  Hobbies,
  Skills
} from "./terminal/content";

const terminalInitialState: {
  outputStack: Array<{
    type: "string" | "component";
    data: string | ElementType;
  }>;
} = {
  outputStack: []
};

// keywords
export const mainKeyword = "portfolio";

// command actions
export const LOG = "--log";
export const SHOW = "--show";
export const SHOW_ALIAS = "-s";
export const VERSION = "--version";
export const VERSION_ALIAS = "-v";
export const HELP = "--help";
export const HELP_ALIAS = "-h";
export const CLEAR = "clear";

const commandReducer = (
  state: any,
  action: {
    type: string;
    payload: { lines: Array<string>; selection: string };
  }
) => {
  let selectionData;
  let stackItems;
  switch (action.type) {
    case SHOW:
    case SHOW_ALIAS:
      selectionData = showReducer(action.payload.selection);
      return {
        outputStack: [
          ...state.outputStack,
          { type: "string", data: action.payload.lines[0] },
          selectionData
        ]
      };
    case VERSION:
    case VERSION_ALIAS:
      return {
        outputStack: [
          ...state.outputStack,
          { type: "string", data: action.payload.lines[0] },
          { type: "string", data: "Carlo Janea Portfolio 1.0.0" }
        ]
      };
    case HELP:
    case HELP_ALIAS:
    case "":
    case undefined:
      return {
        outputStack: [
          ...state.outputStack,
          { type: "string", data: action.payload.lines[0] },
          { type: "component", data: Help }
        ]
      };
    case CLEAR:
      return {
        outputStack: []
      };
    case LOG:
      stackItems = action.payload.lines.map(lines => {
        return { type: "string", data: lines };
      });
      return {
        outputStack: [...state.outputStack, ...stackItems]
      };
    default:
      return {
        outputStack: [
          ...state.outputStack,
          { type: "string", data: action.payload.lines[0] },
          {
            type: "string",
            data:
              "Command not found. Enter portfolio --help if you need help regarding commands."
          }
        ]
      };
  }
};

//show reducer "actions"

export const EDUCATION = "--edu";
export const EDUCATION_ALIAS = "-e";
export const EXPERIENCE = "--exp";
export const EXPERIENCE_ALIAS = "-E";
export const HOBBIES = "--hobbies";
export const HOBBIES_ALIAS = "-H";
export const TECH = "--tech";
export const TECH_ALIAS = "-t";

const showReducer = (selection: string) => {
  switch (selection) {
    case EDUCATION:
    case EDUCATION_ALIAS:
      return { type: "component", data: Education };
    case EXPERIENCE:
    case EXPERIENCE_ALIAS:
      return { type: "component", data: Experience };
    case HOBBIES:
    case HOBBIES_ALIAS:
      return { type: "component", data: Hobbies };
    case TECH:
    case TECH_ALIAS:
      return { type: "component", data: Skills };
    default:
      return {
        type: "string",
        data: `Selection ${selection ||
          "''"} does not exist. Use portfolio --help for further information.`
      };
  }
};

const TerminalContext = createContext(terminalInitialState);
const TerminalActionDispatcher = createContext(null);

const TerminalContextProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(commandReducer, terminalInitialState);

  return (
    <TerminalActionDispatcher.Provider value={{ dispatch }}>
      <TerminalContext.Provider value={{ ...state }}>
        {children}
      </TerminalContext.Provider>
    </TerminalActionDispatcher.Provider>
  );
};
export { TerminalContext, TerminalContextProvider, TerminalActionDispatcher };
