/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { accentColor } from "../../global-styles/colors";
import { useContext } from "react";
import CarouselContext from "./CarouselContext";

function CarouselTracker() {
  const { count, currentIndex, setCurrentIndex } = useContext(CarouselContext);
  return (
    <div
      className="flex-1"
      css={css`
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
            font-weight: 300;
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
