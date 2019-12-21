import React, { createContext, useReducer, FunctionComponent } from "react";

const terminalInitialState: {
  outputStack: Array<string>;
} = {
  outputStack: []
};

// command actions
export const SHOW = "--show";
export const VERSION = "--version";
export const HELP = "--help";
export const CLEAR = "--clear";

const commandReducer = (
  state: any,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case SHOW:
      return {
        outputStack: [
          ...state.outputStack,
          action.payload,
          "showing you stuff!"
        ]
      };
    case VERSION:
      return {
        outputStack: [
          ...state.outputStack,
          action.payload,
          "showing you version!"
        ]
      };
    case HELP:
      return {
        outputStack: [...state.outputStack, action.payload, "showing you help!"]
      };
    case CLEAR:
      return {
        outputStack: [...state.outputStack, action.payload, "clearing!"]
      };
    default:
      return {
        outputStack: [
          ...state.outputStack,
          action.payload,
          "Command not found. Enter portfolio --help if you need help regarding commands."
        ]
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
