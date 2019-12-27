/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useContext, useEffect, useRef } from "react";
import SVGInline from "react-svg-inline";
import CloseButton from "./close-button.svg";
import { motion } from "framer-motion";
import {
  TerminalActionDispatcher,
  HIDE_CARD,
  TerminalContext,
  SWITCH_VIEW
} from "../TerminalContext";

interface CardProps {
  cardTitle: string;
  allowClose?: boolean;
}
const Card: FunctionComponent<CardProps> = ({
  children,
  cardTitle,
  allowClose = true
}) => {
  const { selectedView, showCard } = useContext(TerminalContext);
  const { dispatch } = useContext(TerminalActionDispatcher);
  const cardRef = useRef(null);

  useEffect(() => {
    cardRef.current.focus();
    dispatch({
      type: SWITCH_VIEW,
      payload: "card"
    });
  }, []);

  return (
    <motion.div
      className="flex-parent"
      css={css`
        height: 100vh;
        width: 100%;
        align-content: flex-start;
        background-color: white;
        box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.075),
          0px 2px 20px 0px rgba(0, 0, 0, 0.1);

        * {
          font-family: "Poppins", sans-serif;
        }

        @media only screen and (min-width: 640px) {
          height: 100%;
          transition: all 0.5s ease;
          cursor: pointer;

          ${showCard && selectedView !== "card"
            ? ` margin-top: 10vh;
                margin-left: 0;
                transform: scale(0.7);

                &:hover, &:focus {
                  transform: scale(0.85);
                }
              `
            : ""}
        }

        @media only screen and (min-width: 1024px) {
          ${showCard && selectedView !== "card"
            ? ` margin-left: 0;
                margin-top: 0;
                transform: rotateY(-40deg) scale(0.8);

                &:hover, &:focus {
                 transform: scale(0.85) rotateY(-30deg);
                }
              `
            : ""}
        }
      `}
      ref={cardRef}
      onClick={() => {
        dispatch({
          type: SWITCH_VIEW,
          payload: "card"
        });
      }}
      onKeyPress={() => {
        dispatch({
          type: SWITCH_VIEW,
          payload: "card"
        });
      }}
      role="menuitem"
      id="item-2"
      tabIndex={0}
    >
      <div
        className="flex-1"
        css={css`
          align-content: flex-start;
          justify-content: space-between;
          align-items: center;
          margin-top: 2%;
        `}
      >
        <h1>{cardTitle}</h1>
        {allowClose ? (
          <button
            css={css`
              border: none;
              background: transparent;
              cursor: pointer;
            `}
            onClick={() => {
              dispatch({
                type: HIDE_CARD,
                payload: {}
              });
            }}
          >
            <SVGInline
              height="14px"
              width="14px"
              css={css`
                display: flex;
                align-items: center;
              `}
              svg={CloseButton}
            />
          </button>
        ) : null}
      </div>

      {children}
    </motion.div>
  );
};

export default Card;
