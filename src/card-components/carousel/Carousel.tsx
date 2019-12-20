/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useState } from "react";
import CarouselTracker from "./CarouselTracker";
import CarouselContext from "./CarouselContext";

export interface TrackerProps {
  count: number;
  initial?: number;
}

const Carousel: FunctionComponent<TrackerProps> = ({
  children,
  count,
  initial = 0
}) => {
  const [currentIndex, setCurrentIndex] = useState(initial);
  return (
    <CarouselContext.Provider value={{ count, currentIndex, setCurrentIndex }}>
      <div
        className="flex-1"
        css={css`
          flex: 0 0 100%;
          margin: 0;
          overflow: hidden;
          align-items: center;
        `}
      >
        <CarouselTracker></CarouselTracker>
        <div
          css={css`
            flex: 0 0 100%;
            display: flex;
            flex-flow: row nowrap;
            transform: translateX(-86%);
          `}
        >
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
