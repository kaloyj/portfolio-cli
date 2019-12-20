import { hot } from "react-hot-loader/root";
import React from "react";
import { GlobalStyles } from "./global-styles";
import { Work } from "./card-components";

function App() {
  return (
    <div className="flex-parent">
      <GlobalStyles></GlobalStyles>
      <Work></Work>
    </div>
  );
}

export default hot(App);
