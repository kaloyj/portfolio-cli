import React from "react";
import Card from "./Card";
import { Carousel } from "./carousel";
import CarouselItem from "./carousel/CarouselItem";

function Work() {
  return (
    <Card cardTitle="Works">
      <Carousel count={7}>
        {Array.from(Array(7), (_, i) => (
          <CarouselItem order={i == 6 ? 0 : i + 1} key={i}>
            ITEM {i}
          </CarouselItem>
        ))}
      </Carousel>
    </Card>
  );
}

export default Work;
