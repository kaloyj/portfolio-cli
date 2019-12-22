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
export const VERSION = "--version";
export const HELP = "--help";
export const CLEAR = "--clear";

const commandReducer = (
  state: any,
  action: { type: string; payload: Array<string> | string }
) => {
  let selectionData;
  let stackItems;
  switch (action.type) {
    case SHOW:
      selectionData = showReducer(TECH);
      return {
        outputStack: [
          ...state.outputStack,
          { type: "string", data: action.payload },
          selectionData
        ]
      };
    case VERSION:
      return {
        outputStack: [
          ...state.outputStack,
          { type: "string", data: action.payload },
          { type: "string", data: "Carlo Janea Portfolio 1.0.0" }
        ]
      };
    case HELP:
    case "":
    case undefined:
      return {
        outputStack: [
          ...state.outputStack,
          { type: "string", data: action.payload },
          { type: "component", data: Help }
        ]
      };
    case CLEAR:
      return {
        outputStack: []
      };
    case LOG:
      stackItems = action.payload.map(lines => {
        return { type: "string", data: lines };
      });
      return {
        outputStack: [...state.outputStack, ...stackItems]
      };
    default:
      return {
        outputStack: [
          ...state.outputStack,
          { type: "string", data: action.payload },
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
export const EXPERIENCE = "--exp";
export const HOBBIES = "--hobbies";
export const TECH = "--tech";

const showReducer = selection => {
  switch (selection) {
    case EDUCATION:
      return { type: "component", data: Education };
    case EXPERIENCE:
      return { type: "component", data: Experience };
    case HOBBIES:
      return { type: "component", data: Hobbies };
    case TECH:
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
