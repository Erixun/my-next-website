import { useEffect, useRef } from "react";
import utilStyle from "../styles/utils.module.scss";

const TheCurrentlyWorkingOn = () => {
  const scrollIntoView = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const rightFadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-right");
          return;
        }

        entry.target.classList.remove("fade-in-right");
      });
    });
    rightFadeObserver.observe(currently.current);
  });

  const currently = useRef<null | HTMLDivElement>(null);
  return (
    <section id="currently" className="main-section currently">
      <div className="pattern pattern-x"></div>
      <div
        ref={currently}
        className={[utilStyle.mdContainer, "md-container", utilStyle.flx].join(
          " "
        )}
      >
        {/* className="md-container flx"> */}
        <h2>Currently...</h2>
        <article className="currently-learning ctext">
          <h3>
            <div className="shadow-wrapper" style={{ display: "inline-block" }}>
              <span className="flipped studious" data-emoji>
                {" "}
                🧐{" "}
              </span>
            </div>
            &nbsp;I Am Learning
          </h3>
          <ul className="padl" role="presentation">
            <li>Azure Functions</li>
            <li>Clean Code</li>
            <li>Next.js</li>
          </ul>
        </article>
        <div className="and">&</div>
        <article className="currently-workingon ctext">
          <h3>
            Working on&nbsp;
            <span className="rotates" data-emoji>
              🛠️
            </span>
          </h3>
          <ul role="presentation">
            <li>
              <a
                href="http://foodr.pro"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: "bold", fontStyle: "italic" }}
              >
                Foodr
              </a>
            </li>
            <li>My own website</li>
            <li>An Investment app</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default TheCurrentlyWorkingOn;
