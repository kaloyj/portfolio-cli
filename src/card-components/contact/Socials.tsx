/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { dirtyWhiteColor } from "../../global-styles/colors";
import SVGInline from "react-svg-inline";
import Linkedin from "./linkedin.svg";
import Github from "./github.svg";
import Twitter from "./twitter.svg";

function Socials() {
  const socials = [
    {
      title: "twitter",
      url: "https://twitter.com/carlojanea",
      component: Twitter
    },
    { title: "github", url: "https://github.com/kaloyj", component: Github },
    {
      title: "linkedin",
      url: "https://www.linkedin.com/in/carlo-janea-2880a2132/",
      component: Linkedin
    }
  ];
  return (
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        flex: 0 0 calc(100% - 4px);
        margin-left: 2px;
        margin-top: 1%;
      `}
    >
      <h3>Socials</h3>
      <div
        css={css`
          flex: 0 0 100%;
          display: flex;
          flex-flow: row wrap;
          margin-top: 2%;
        `}
      ></div>
      {socials.map(contact => (
        <a
          key={contact.title}
          target="_blank"
          rel="noopener noreferrer"
          href={contact.url}
        >
          <div
            css={css`
              background-color: transparent;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              display: flex;
              flex-flow: row wrap;
              margin-right: 20px;
              align-items: center;
              justify-content: center;
              color: ${dirtyWhiteColor};
              font-weight: 600;
              box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.075),
                0px 5px 5px 0px rgba(0, 0, 0, 0.09);
            `}
          >
            <SVGInline
              height="50%"
              width="50%"
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
              `}
              svg={contact.component}
            />
          </div>
        </a>
      ))}
    </div>
  );
}

export default Socials;
