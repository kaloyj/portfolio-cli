/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Card from "./Card";
import { Carousel } from "./carousel";
import CarouselItem from "./carousel/CarouselItem";
import Details from "./Details";

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

      {true ? (
        <Details />
      ) : (
        <h3
          className="flex-1"
          css={css`
            margin-top: 8%;
            margin-left: 4.5%;
          `}
        >
          Select a work showcase.
        </h3>
      )}
    </Card>
  );
}

export default Work;
