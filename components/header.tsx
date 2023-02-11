import styles from "./header.module.scss";
import utilStyles from "../styles/utils.module.scss";
import TheLightBulb from "./TheLightBulb";
import { useEffect, useState } from "react";

const Header = () => {
  // const toggleLightMode = () => {
  //   switchLightBulb();
  //   switchLightMode();
  // };

  // const [powerOff, setPowerOff] = useState(true);
  // // const lightBulb = useRef(null);

  // const switchLightBulb = () => {
  //   const lb = document.getElementById("light-bulb");
  //   // const lb = lightBulb.current;
  //   if (!lb) return;

  //   lb.classList.toggle("off");
  //   lb.blur();
  //   if (lb.classList.contains("off")) {
  //     //TODO: useRef
  //     setPowerOff(true);
  //     // emit("powerOff", true);
  //   } else {
  //     setPowerOff(false);
  //     // emit("powerOff", false);
  //   }
  // };

  // const switchLightMode = () => {
  //   const classList = document.body.classList;
  //   classList.toggle("dark");
  //   storeLightMode(classList);
  // };

  // const HAS_LIGHTS_OFF = "hasLightsOff";
  // const storeLightMode = (classList: DOMTokenList) => {
  //   localStorage.setItem(HAS_LIGHTS_OFF, `${classList.contains("dark")}`);
  // };
  // //determines if the user has a set theme
  // const detectColorScheme = () => {
  //   //local storage is used to override OS theme settings
  //   if (localStorage.getItem(HAS_LIGHTS_OFF) === "true") {
  //     return true;
  //   } else if (!window.matchMedia) {
  //     //matchMedia method not supported
  //     return false;
  //   } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     //OS theme setting detected as dark
  //     return true;
  //   }
  // };
  // useEffect(() => {
  //   const prefersDark = detectColorScheme();
  //   if (prefersDark) {
  //     toggleLightMode();
  //   }
  // });
  return (
    <header id="top" className={styles.primary}>
      <div className={[utilStyles.lgContainer, utilStyles.flx].join(" ")}>
        <section
          id="logo"
          className={[styles.logo, utilStyles.ltext, utilStyles.flx].join(" ")}
          // className="logo ltext flx"
        >
          <h1>erixun.me</h1>
          <TheLightBulb />
          {/* @powerOff="handleDarkness" /> */}
        </section>
        <section className={styles.mid}>
          <nav>
            <ul>
              <li>
                <a href="#powers">
                  {/*TODO: @click.prevent="scrollIntoView('powers')" */}
                  Tech XP
                </a>
              </li>
              <li>
                <a href="#currently">
                  {/* @click.prevent="scrollIntoView('currently')" */}
                  Currently
                </a>
              </li>
              <li>
                <a href="#favorites">
                  {/* @click.prevent="scrollIntoView('favorites')" */}
                  Favorites
                </a>
              </li>
            </ul>
          </nav>
        </section>
        {/* <!-- <section className=""></section> --> */}
      </div>
    </header>
  );
};

export default Header;
