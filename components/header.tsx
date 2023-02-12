import styles from "./header.module.scss";
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
                <LinkGoto id="footer" />
              </li>
              <li>
                <LinkGoto id="powers" />
              </li>
              <li>
                <LinkGoto id="currently" />
              </li>
              <li>
                <LinkGoto id="favorites" />
              </li>
              <li>
                <LinkGoto id="footer" />
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Header;
