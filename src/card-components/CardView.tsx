/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useContext, useEffect, useState } from "react";
import { TerminalContext } from "../TerminalContext";
import { Route, Switch, useHistory } from "react-router-dom";
import { Contact } from ".";
import Resume from "./Resume";
import Work from "./Work";
import { AnimatePresence, motion } from "framer-motion";

const CardView = () => {
  const { showCard, currentCardRoute, selectedView } = useContext(
    TerminalContext
  );
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  const history = useHistory();
  useEffect(() => {
    history.push(currentCardRoute);
    return () => setIsAnimationDone(false);
  }, [currentCardRoute, history]);

  const onAnimationComplete = () => {
    setIsAnimationDone(true);
  };

  return (
    <AnimatePresence>
      {showCard ? (
        <motion.div
          className="flex-parent"
          css={css`
            height: 100vh;
            width: 100vw;
            position: absolute;
            top: 0;
            left: 0;
            background-color: transparent;
            border: 3px solid black;

            @media only screen and (min-width: 640px) {
              width: 72vw;
              margin-left: 4vw;
              left: 20vw;
              height: 95vh;
              margin-top: 2.5vh;

              ${showCard && selectedView !== "card" ? ` margin-left: 8vw;` : ""}
            }

            @media only screen and (min-width: 1024px) {
              width: 42vw;
              left: 50vw;
              margin-left: 2vw;
            }
          `}
          key="card-view"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ y: "100vh" }}
          onAnimationComplete={onAnimationComplete}
        >
          <Route
            render={({ location }) => (
              <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                  <Route path="/contact">
                    <Contact animationDone={isAnimationDone} />
                  </Route>
                  <Route path="/resume">
                    <Resume animationDone={isAnimationDone} />
                  </Route>
                  <Route path="/work">
                    <Work animationDone={isAnimationDone} />
                  </Route>
                </Switch>
              </AnimatePresence>
            )}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default CardView;
