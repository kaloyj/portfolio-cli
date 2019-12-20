/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent } from "react";
import CarouselTracker from "./CarouselTracker";

const Carousel: FunctionComponent = ({ children }) => {
  return (
    <div
      className="flex-1"
      css={css`
        align-items: center;
      `}
    >
      <CarouselTracker count={7}></CarouselTracker>
      {children}
    </div>
  );
};

export default Carousel;
