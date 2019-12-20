/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  dirtyWhiteColor,
  accentColor,
  yellowColor
} from "../../global-styles/colors";

function Hobbies() {
  const professional = [
    "creating mock ups for dummy aps",
    "SVG illustrations",
    "playing with open source",
    "JavaScript related podcasts/content",
    "tech-related blog"
  ];
  const nonTech = [
    "music connoisseur",
    "musical theatre fan",
    "cooking enthusiast",
    "movie superfan",
    "self proclaimed paramore's #1 fan"
  ];

  return (
    <div
      className="flex-parent"
      css={css`
        width: 96%;
        margin-left: 2%;
        margin-top: 5px;
        * {
          color: ${dirtyWhiteColor};
        }
      `}
    >
      <div>Carlo Janea&apos;s Hobbies</div>
      {/* professional */}
      <div
        css={css`
          flex: 0 0 100%;
          margin-top: 4%;

          .prefix {
            color: ${accentColor};
            font-weight: 600;
            margin-right: 2%;
          }
        `}
      >
        <div
          css={css`
            color: ${accentColor};
            font-weight: 600;
            margin-bottom: 2%;
          `}
        >
          Professional
        </div>
        {professional.map(profHobbies => (
          <div
            key={profHobbies}
            css={css`
              margin-bottom: 4%;
            `}
          >
            <span className="prefix">&gt;</span>
            {profHobbies}
          </div>
        ))}
      </div>

      {/* non-tech */}
      <div
        css={css`
          flex: 0 0 100%;
          margin-top: 4%;

          .prefix {
            color: ${yellowColor};
            font-weight: 600;
            margin-right: 2%;
          }
        `}
      >
        <div
          css={css`
            color: ${yellowColor};
            font-weight: 600;
            margin-bottom: 2%;
          `}
        >
          Non-work related
        </div>
        {nonTech.map(nonTechHobbies => (
          <div
            key={nonTechHobbies}
            css={css`
              margin-bottom: 4%;
            `}
          >
            <span className="prefix">&gt;</span>
            {nonTechHobbies}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
