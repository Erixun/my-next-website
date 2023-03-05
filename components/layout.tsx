import Head from "next/head";
import Header from "./Header";
import styles from "./layout.module.scss";
import Link from "next/link";
import TheUpTopButton from "./TheUpTopButton";

const name = "Erik Emanuel";
export const siteTitle = "erixun.me";

export default function Layout({ children, home }) {
  return (
    <div className="app">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Homepage of Erik Emanuel - built with Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <div id="overlay"></div>

      <Header />

      <main className={styles.container}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <footer id="Footer">
        <div className="lg-container grid">
          <section className="contact ltext">
            <h3>Contact</h3>
            <ul role="presentation">
              <li>
                <a
                  href="https://discord.gg/PF3MK6vM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord-server
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/erik-sundberg-76463787/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin-profile
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/erik.sundberg.9699"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook-profile
                </a>
              </li>
              <li>
                <a href="mailto:erik.sundberg@unicus.com">
                  erik.sundberg@unicus.com
                </a>
              </li>
            </ul>
          </section>
          <section className="site-info ltext">
            <h3>Site info</h3>
            <ul role="presentation">
              <li>Made with Next.js</li>
              <li>Hosted on github pages</li>
              <li>
                Source code{" "}
                <a href="https://github.com/Erixun/my-website">here</a>
              </li>
            </ul>
          </section>
          <section className="credits ltext">
            <h3>Credits</h3>
            <ul role="presentation">
              <li>Made by Erik Emanuel</li>
              <li>
                Dev icons sourced from <a href="https://devicon.dev/">here</a>
              </li>
              <li>
                Podcast images found{" "}
                <a href="https://podcasts.google.com/">here</a>
              </li>
            </ul>
          </section>
          <section className="site-status ltext">
            <h3>Status</h3>
            <ul role="presentation">
              <li>Version: 1.3.2</li>
              <li>Last updated: Feb 26, 2023</li>
            </ul>
          </section>
        </div>
        <TheUpTopButton />
      </footer>
    </div>
  );
}
