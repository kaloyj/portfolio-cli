/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { accentColor } from "../../global-styles/colors";
import { useState } from "react";

interface TrackerProps {
  count: number;
  initial?: number;
}

function CarouselTracker({ count, initial = 0 }: TrackerProps) {
  const [currentIndex, setCurrentIndex] = useState(initial);
  return (
    <div
      className="flex-1"
      css={css`
        flex: 0 0 100%;
        margin: 0;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          flex: 0 0 50%;
        `}
      >
        {Array.from(Array(count), (_, i) => (
          <div
            key={i}
            css={css`
              height: 12px;
              width: 12px;
              background-color: ${currentIndex == i ? accentColor : "#cccccc"};
              border-radius: 50%;
              margin-left: 4px;
              display: inline-block;
            `}
          ></div>
        ))}
      </div>

      <div
        css={css`
          flex: 0 1 auto;

          button {
            border: none;
            background: transparent;
            cursor: pointer;
          }

          button > span {
            font-weight: 600;
            font-size: 20px;
          }
        `}
      >
        <button
          onClick={() => {
            currentIndex - 1 < 0
              ? setCurrentIndex(count - 1)
              : setCurrentIndex(currentIndex - 1);
          }}
        >
          <span>&lt;</span>
        </button>
        <button
          onClick={() => {
            currentIndex + 1 >= count
              ? setCurrentIndex(0)
              : setCurrentIndex(currentIndex + 1);
          }}
        >
          <span>&gt;</span>
        </button>
      </div>
    </div>
  );
}

export default CarouselTracker;