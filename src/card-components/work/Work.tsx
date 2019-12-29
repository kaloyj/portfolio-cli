/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Card from "../Card";
import { Carousel } from "../carousel";
import CarouselItem from "../carousel/CarouselItem";
import Details from "../Details";
import Recordion from "./recordion.png";
import Getwork from "./getwork.jpeg";
import Galeug from "./galeug.jpeg";
import Bso from "./bso.jpeg";
import SVGInline from "react-svg-inline";
import Placeholder from "./photo-placeholder.svg";
import { useState } from "react";

export interface WorkItemProps {
  name: string;
  preview: string;
  techList: Array<string>;
}

function Work({ animationDone }: { animationDone: boolean }) {
  const [selectedWork, setSelectedWork] = useState(null);

  const prevWork: Array<WorkItemProps> = [
    {
      name: "Recordion",
      preview: Recordion,
      techList: ["React", "TypeScript", "localStorage"]
    },
    {
      name: "A Page Builder Application",
      preview: "",
      techList: ["React", "React Hooks", "Rails"]
    },
    {
      name: "A Summit Application",
      preview: "",
      techList: ["React", "Redux", "Rails"]
    },
    {
      name: "An Employee Database Application",
      preview: "",
      techList: ["Vue", "Vuex", "PHP"]
    },
    {
      name: "Getwork",
      preview: Getwork,
      techList: ["Angular", "SpringBoot", "Flex & Grid"]
    },
    {
      name: "Galeug",
      preview: Galeug,
      techList: ["Java", "ANTLR", "Python"]
    },
    {
      name: "Box Space Optimizer",
      preview: Bso,
      techList: ["Python", "Blender", "Panda3D"]
    }
  ];

  console.log(
    selectedWork ? { wow: prevWork[selectedWork] } : `ngek ${selectedWork}`
  );
  return (
    <Card cardTitle="Works" animationDone={animationDone}>
      <Carousel count={prevWork.length}>
        {prevWork.map((work, index) => (
          <CarouselItem
            order={index == prevWork.length - 1 ? 0 : index + 1}
            key={work.name}
            itemIndex={index}
            setSelectedWork={setSelectedWork}
          >
            {work.preview ? (
              <img
                src={work.preview}
                alt={`${work.name}'s preview`}
                css={css`
                  height: 100%;
                  width: 100%;
                  object-fit: cover;
                `}
              ></img>
            ) : (
              <SVGInline
                height="30px"
                width="30px"
                css={css`
                  display: flex;
                  flex: 0 0 100%;
                  align-items: center;
                  justify-content: center;
                `}
                svg={Placeholder}
              />
            )}
          </CarouselItem>
        ))}
      </Carousel>

      {selectedWork || selectedWork == 0 ? (
        <Details item={prevWork[selectedWork]} />
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
