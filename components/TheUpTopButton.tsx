import { useEffect } from "react";

const TheUpTopButton = () => {
  useEffect(() => {
    const btn = document.getElementById("up-top-btn") ?? {
      style: { opacity: "0", "pointer-events": "none" },
    };

    const scrollFunction = () => {
      const isVisible = hasScrolled(1000);
      btn.style.opacity = isVisible ? "0.9" : "0";
      btn.style["pointer-events"] = isVisible ? "unset" : "none";
    };

    const hasScrolled = (limit: number) =>
      document.body.scrollTop > limit ||
      document.documentElement.scrollTop > limit;

    window.onscroll = scrollFunction;

    // const scrollUp = () => {
    //   document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
    // };
  });
  return (
    <span>
      <a
        id="up-top-btn"
        className="up-top-btn"
        href="#top"
        title="Scroll back up"
      >
        {/* @click.prevent="scrollUp" */}
        <svg
          width="256px"
          height="256px"
          viewBox="0 0 256 256"
          id="Flat"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="title"
        >
          <path d="M208,172a11.96187,11.96187,0,0,1-8.48535-3.51465L128,96.9707,56.48535,168.48535a12.0001,12.0001,0,0,1-16.9707-16.9707l80-80a11.99975,11.99975,0,0,1,16.9707,0l80,80A12,12,0,0,1,208,172Z">
            <title id="title">Caret up</title>
          </path>
        </svg>
      </a>
      <style jsx>
        {`
          .up-top-btn {
            width: clamp(20px, 5vmax, 50px);
            height: clamp(20px, 5vmax, 50px);
            text-decoration: none;
            color: var(--accented-text-color);
            background-color: var(--accented-bgc);
            opacity: 0;
            padding: 6px;
            border-radius: 25%;
            border: 1px solid var(--neutral-text);
            position: fixed;
            bottom: 20px;
            right: 24px;
            transform: rotate(-7deg) translateX(-5px) scale(1);
            box-shadow: 2px 4px 3px 0px #80808085;
            transition: all 300ms;
          }
          .up-top-btn:hover {
            transform: rotate(0deg) translateX(0) scale(1.05);
            box-shadow: 1px 2px 3px 0px #80808085;
          }

          .up-top-btn svg {
            width: 100%;
            height: 100%;
          }
          .up-top-btn svg path {
            fill: var(--neutral-text);
          }
        `}
      </style>
    </span>
  );
};

export default TheUpTopButton;
