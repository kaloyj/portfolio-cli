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
    // please set focus on card when mounting
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
        background-color: white;

        @media only screen and (min-width: 640px) {
          width: 80vw;
          left: 20vw;
        }

        @media only screen and (min-width: 1024px) {
          width: 50vw;
          left: 50vw;
        }
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
