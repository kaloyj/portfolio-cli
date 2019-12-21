import { hot } from "react-hot-loader/root";
import React from "react";
import { GlobalStyles } from "./global-styles";
import Terminal from "./terminal/Terminal";
import { TerminalContextProvider } from "./TerminalContext";

function App() {
  return (
    <div className="flex-parent">
      <GlobalStyles></GlobalStyles>
      <TerminalContextProvider>
        <Terminal></Terminal>
      </TerminalContextProvider>
    </div>
  );
}

export default hot(App);
