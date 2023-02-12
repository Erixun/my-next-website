import styles from "./header.module.scss";
import utilStyles from "../styles/utils.module.scss";
import TheLightBulb from "./TheLightBulb";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";

const LinkGoto = ({ id }) => (
  <Link href={`#${id}`} scroll={false}>
    {id}
  </Link>
);

const Header = () => {
  // const scrollTo = ({ target }) => {
  //   console.log(target);
  //   window.scrollTo({
  //     top: document.getElementById(target.goto).offsetTop - 60,
  //     behavior: "smooth",
  //   });
  // };
  // useEffect(() => {
  //   document.querySelectorAll(".btn-goto").forEach((btn) => {
  //     btn.addEventListener("click", scrollTo);
  //   });
  // });
  return (
    <header id="top" className={styles.primary}>
      <div className={[utilStyles.lgContainer, utilStyles.flx].join(" ")}>
        <section
          id="logo"
          className={[styles.logo, utilStyles.ltext, utilStyles.flx].join(" ")}
        >
          <h1>erixun.me</h1>
          <TheLightBulb />
        </section>
        <section className={styles.mid}>
          <nav>
            <ul>
              <li>
                <LinkGoto id="footer" />
              </li>
              <li>
                <Link href="#powers" scroll={false}>
                  Tech XP
                </Link>
              </li>
              <li>
                <a href="#currently" data-goto="currently" className="btn-goto">
                  {/* @click.prevent="scrollIntoView('currently')" */}
                </a>
                <Link href="#currently">Currently</Link>
              </li>
              <li>
                <a href="#favorites" data-goto="favorites" className="btn-goto">
                  {/* @click.prevent="scrollIntoView('favorites')" */}
                  Favorites
                </a>
              </li>
              <li>
                <a href="#footer" data-goto="footer" className="btn-goto">
                  {/* @click.prevent="scrollIntoView('favorites')" */}
                  Favorites
                </a>
              </li>
              <li>
                <Link href="#footer" scroll={false}>
                  Footer
                </Link>
              </li>
            </ul>
          </nav>
          {/* <Script>
          const scrollIntoView = ({ target }) => {
    console.log(target.ref);
    document.getElementById(target.ref).scrollIntoView({ behavior: "smooth" });
  };
          </Script> */}
        </section>
        {/* <!-- <section className=""></section> --> */}
      </div>
    </header>
  );
};

export default Header;
