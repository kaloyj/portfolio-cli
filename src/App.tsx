import { hot } from "react-hot-loader/root";
import React from "react";
import { GlobalStyles } from "./global-styles";
import Terminal from "./terminal/Terminal";

function App() {
  return (
    <div className="flex-parent">
      <GlobalStyles></GlobalStyles>
      <Terminal></Terminal>
    </div>
  );
}

export default hot(App);
