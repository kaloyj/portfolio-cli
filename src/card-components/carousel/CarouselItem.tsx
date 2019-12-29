/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction
} from "react";
import { lightGrayColor, dirtyWhiteColor } from "../../global-styles/colors";
import CarouselContext from "./CarouselContext";
import { motion } from "framer-motion";

interface ItemProps {
  order: number;
  itemIndex: number;
  setSelectedWork: Dispatch<SetStateAction<number>>;
}

const CarouselItem: FunctionComponent<ItemProps> = ({
  children,
  order,
  itemIndex,
  setSelectedWork
}) => {
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
        flex: 0 0 74%;
        height: 140px;
        border-radius: 10px;
        overflow: hidden;
        margin-left: 4%;
        display: flex;
        flex-flow: row wrap;
        background-color: ${lightGrayColor};
        color: ${dirtyWhiteColor};
        order: ${itemOrder};
        box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.075),
          5px 5px 5px 0px rgba(0, 0, 0, 0.08);
      `}
      onClick={() => {
        console.log("wowowow");
        setSelectedWork(itemIndex);
      }}
      onKeyPress={() => {
        setSelectedWork(itemIndex);
      }}
      role="menuitem"
      tabIndex={0}
    >
      {children}
    </motion.div>
  );
};

export default CarouselItem;
