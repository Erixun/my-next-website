import { useState } from "react";
import Html5OriginalIcon from "react-devicons/html5/original";
import DevIconTech from "./DevIconTech";
import Icon from "./Icon";

// import * as DevIcon from "react-devicons";

// export const DevIconTech = ({ techId }) => {
//   switch (techId) {
//     case "html5":
//       return DevIcon.Html5OriginalIcon;
//     case "css3":
//       return DevIcon.Css3OriginalIcon;
//     case "react":
//       return DevIcon.ReactOriginalIcon;
//   }
// };

const BaseSkillCard = ({ data }) => {
  const { label, description, proficiency, id } = data;

  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = (id: string) => {
    const card = document.getElementById(id);
    if (card) {
      card.classList.toggle("flip");
      setTimeout(() => {
        setIsFlipped(!isFlipped);
      }, 500);
      setTimeout(() => {
        card.classList.toggle("flip");
      }, 1000);
    }
  };
  // const SkillIcon = DevIconTech(id);

  return (
    <li>
      <article className="skill-card" id={id}>
        <button className="flip-btn" onClick={() => flipCard(id)}>
          <img
            style={{ pointerEvents: "none" }}
            className="flip-indicator"
            src="/flip.svg"
            alt="Flip-indicator"
          />
        </button>
        {isFlipped ? (
          <div className="content back">
            {/* <Icon /> */}
            {/* Html5OriginalIcon */}
            <DevIconTech
              techId={id}
              // className="devicon"
              // size="100%"
              // style={{ gridArea: "logo" }}
            />
            <h3>
              {/*TODO: <i
          :class="`devicon-${id}-${logotype} colored`"
          role="img"
          :aria-label="`${label} logo`"
        ></i> */}

              {/* <i
                className="devicon devicon-adonisjs-original colored"
                role="img"
              ></i> */}
              <span className="label">{label}</span>
            </h3>
            <p className="description">{description}</p>
          </div>
        ) : (
          <div className="content front">
            {/* <i className="devicon devicon-adonisjs-original"></i> */}
            {/* <Icon /> */}
            <DevIconTech techId={id} />
            {/* <Html5OriginalIcon
              className="devicon"
              size="100%"
              style={{ gridArea: "logo" }}
            /> */}

            {/*TODO: <i
        :class="`devicon devicon-${id}-${logotype} colored`"
        role="img"
        :aria-label="`${label} logo`"
      ></i> */}
            <h3>{label}</h3>
            <meter
              min="0"
              data-low="25"
              data-high="60"
              data-optimum="70"
              max="100"
              value={proficiency}
              title={`Proficiency ${proficiency}%`}
            >
              Proficiency: {proficiency}%
            </meter>
          </div>
        )}
      </article>
      <style jsx>{`
        .skill-cards li {
          perspective: 1200px;
        }

        .skill-card > .content {
          height: 130px;
          padding: 1em;
          border-radius: 5px;
          background: var(--alt-section-bgc);
          border: var(--accented-border);
          text-align: left;
          box-shadow: 1px 1px 1px 1px #80808082;
          box-sizing: border-box;
        }
        .skill-card > .content > h3 {
          white-space: nowrap;
          align-self: end;
        }
        .skill-card > .back {
          font-size: 0.7em;
          letter-spacing: 0.3px;
          padding: 0.7em 1em;
        }
        .skill-card > .back > h3 {
          font-size: clamp(12px, 2em, 16px);
        }
        .label {
          padding-left: 5px;
        }
        p {
          padding: 0.5em 0;
          font-size: 12px;
          color: black;
          font-weight: normal;
          margin-top: 0;
          line-height: 1.4;
        }
        .skill-card > .front {
          place-items: center start;
          position: relative;
          text-align: left;
          display: grid;
          padding: 1em;
          border-radius: 5px;
          background: var(--alt-section-bgc);
          border: var(--accented-border);
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto;
          grid-template-areas:
            "logo h3 h3"
            "logo meter meter";
          column-gap: 10px;
        }
        .skill-card > .back {
          display: grid;
          grid-template-rows: 27px 1fr;
          grid-template-areas:
            "logo h3"
            "text text";
          grid-template-columns: 30px 1fr;
        }
        .devicon {
          grid-area: logo;
          font-size: 85px;
          // margin-right: 1rem;
        }
        h3 {
          grid-area: h3;
          width: 100%;
          align-self: end;
        }
        .description {
          grid-area: text;
        }
        meter {
          grid-area: meter;
          height: 0.5rem;
          margin-right: 1em;
          width: 95%;
          border-radius: 10px;
          box-sizing: border-box;
          position: relative;
        }
        meter::-moz-meter-bar {
          border-radius: 10px 0 0 10px;
        }
        .flip-btn {
          position: absolute;
          line-height: 0;
          right: 0px;
          top: 0px;
          padding: 5px 5px 18px 10px;
          box-sizing: content-box;
          cursor: pointer;
          border-radius: 0 5px;
          z-index: 7574;
        }
        .flip-btn:hover {
          background: lightgrey;
        }
        .flip-btn:focus {
          outline: 1px solid var(--brand-color);
        }
        .flip-btn:active {
          outline: 2 px solid var(--brand-color);
        }
        .flip-indicator {
          width: 0.8em;
          pointer-events: none;
        }
      `}</style>
    </li>
  );
};

export default BaseSkillCard;
