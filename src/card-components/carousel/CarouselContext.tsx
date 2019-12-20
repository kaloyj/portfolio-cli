import { Dispatch, SetStateAction, createContext } from "react";

interface IState {
  count: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}
const initialState: IState = {
  count: 7,
  currentIndex: 0,
  setCurrentIndex: () => {}
};

const CarouselContext = createContext(initialState);

export default CarouselContext;
