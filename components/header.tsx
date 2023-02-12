import styles from "./Header.module.scss";
import utilStyles from "../styles/utils.module.scss";
import TheLightBulb from "./TheLightBulb";
import LinkGoto from "./LinkGoto";

const Header = () => {
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
                <LinkGoto id="Powers" />
              </li>
              <li>
                <LinkGoto id="Currently" />
              </li>
              <li>
                <LinkGoto id="Favorites" />
              </li>
              <li>
                <LinkGoto id="Footer" />
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Header;
