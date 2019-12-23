/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useContext, useEffect } from "react";
import { TerminalContext } from "../TerminalContext";
import { Route, Switch, useHistory } from "react-router-dom";
import { Contact } from ".";
import Resume from "./Resume";
import Work from "./Work";

const CardView = () => {
  const { showCard, currentCardRoute } = useContext(TerminalContext);
  const history = useHistory();
  useEffect(() => {
    history.push(currentCardRoute);
  }, [currentCardRoute, history]);

  return showCard ? (
    <div
      className="flex-parent"
      css={css`
        min-height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        border: 3px solid yellow;
        background-color: white;
      `}
    >
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
    </div>
  ) : null;
};

export default CardView;
