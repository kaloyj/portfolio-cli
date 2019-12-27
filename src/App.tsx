import { hot } from "react-hot-loader/root";
import React from "react";
import { GlobalStyles } from "./global-styles";
import Terminal from "./terminal/Terminal";
import { TerminalContextProvider } from "./TerminalContext";
import { CardView } from "./card-components";
import { BrowserRouter as Router } from "react-router-dom";
import MainNavBar from "./NavBar";

function App() {
  return (
    <div className="flex-parent main-body">
      <GlobalStyles></GlobalStyles>
      <TerminalContextProvider>
        <MainNavBar></MainNavBar>
        <Router>
          <div aria-owns="item-1 item-2" role="menu" className="flex-parent">
            <Terminal></Terminal>
            <CardView></CardView>
          </div>
        </Router>
      </TerminalContextProvider>
    </div>
  );
}

export default hot(App);
