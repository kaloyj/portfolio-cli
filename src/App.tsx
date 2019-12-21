import { hot } from "react-hot-loader/root";
import React from "react";
import { GlobalStyles } from "./global-styles";
import { Contact } from "./card-components";

function App() {
  return (
    <div className="flex-parent">
      <GlobalStyles></GlobalStyles>
      <Contact></Contact>
    </div>
  );
}

export default hot(App);
