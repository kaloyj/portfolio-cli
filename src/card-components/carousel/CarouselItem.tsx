/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FunctionComponent, useContext, useState, useEffect } from "react";
import { lightGrayColor, dirtyWhiteColor } from "../../global-styles/colors";
import CarouselContext from "./CarouselContext";
import { motion } from "framer-motion";

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

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 60
  };

  return (
    <motion.div
      positionTransition={itemOrder == count - 1 ? false : spring}
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
    </motion.div>
  );
};

export default CarouselItem;
