import { hot } from "react-hot-loader/root";
import React from "react";
import { GlobalStyles } from "./global-styles";
import Terminal from "./terminal/Terminal";
import { TerminalContextProvider } from "./TerminalContext";
import { CardView } from "./card-components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="flex-parent">
      <GlobalStyles></GlobalStyles>
      <TerminalContextProvider>
        <Router>
          <Terminal></Terminal>
          <CardView></CardView>
        </Router>
      </TerminalContextProvider>
    </div>
  );
}

export default hot(App);
