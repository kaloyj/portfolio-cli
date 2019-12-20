/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useContext, useState, useEffect } from "react";
import { lightGrayColor, dirtyWhiteColor } from "../../global-styles/colors";
import CarouselContext from "./CarouselContext";

interface ItemProps {
  order: number;
}

const CarouselItem: FunctionComponent<ItemProps> = ({ children, order }) => {
  const { count, currentIndex } = useContext(CarouselContext);

  const [itemOrder, setItemOrder] = useState(order);

  useEffect(() => {
    let generatedOrder: number = order - currentIndex;
    if (generatedOrder < 0) {
      generatedOrder = count + generatedOrder; // count - 1 is the highest order
    }

    setItemOrder(generatedOrder);
  }, [currentIndex, order, count]);

  return (
    <div
      css={css`
        flex: 0 0 82%;
        height: 140px;
        border-radius: 10px;
        overflow: hidden;
        margin-left: 4%;
        display: flex;
        flex-flow: row wrap;
        background-color: ${lightGrayColor};
        color: ${dirtyWhiteColor};
        order: ${itemOrder};
      `}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
