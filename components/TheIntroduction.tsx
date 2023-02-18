import Image from "next/image";
import utilStyles from "../styles/utils.module.scss";

const DevIcon = ({ src, alt }) => (
  <Image src={src} width={48} height={48} alt={alt} />
);

const TheIntroduction = () => {
  return (
    <section className="main-section presentation">
      <div id="intro" className={utilStyles.lgContainer}>
        <aside
          tabIndex={0}
          className={[
            "portrait",
            utilStyles.flxCol,
            utilStyles.flxJustCenter,
          ].join(" ")}
        >
          <div className="shadow-wrapper">
            <figure aria-label="Erik Emanuel">
              <div className="portrait-wrapper ib">
                <picture>
                  <img src="/images/portrait-180x180.jpg" alt="Erik Emanuel" />
                </picture>
              </div>
            </figure>
          </div>
        </aside>
        <article className="flx-col flx-just-center">
          <header id="welcome-header" className="welcome-header">
            <h2 className={[utilStyles.ib, utilStyles.brand].join(" ")}>
              Welcome
            </h2>
            <h3 className="ib">
              This is the homepage of Erik Emanuel, Swedish Web developer, or{" "}
              <em>Swebdev</em>
            </h3>
          </header>
          <p>
            I am a passionate front-end developer, an avid programmer, tester
            and wanna-be full-stack engineer! Also a nutritionist by
            education...
          </p>
          <p>
            I know Vue as well as React but mostly focus on the latter, and its
            offspring Next.js.
          </p>
          <p>
            If you'd like to get in contact or know more about me, use one of
            the options below. I'd be happy to hear from you. Feel free to look
            around too.
          </p>
        </article>
      </div>
      <div className="separator">
        <ul
          className={[
            "contact-options",
            utilStyles.flx,
            utilStyles.flxJustCenter,
          ].join(" ")}
        >
          <li>
            <a
              href="https://discord.gg/PF3MK6vM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DevIcon
                src="https://www.svgrepo.com/show/341762/discord.svg"
                alt="Discord Server"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/erik-sundberg-76463787/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DevIcon
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn profile"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/erik.sundberg.9699"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DevIcon
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                alt="Facebook profile"
              />
            </a>
          </li>
          <li className="circle">
            <a
              href="https://github.com/Erixun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DevIcon
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="LinkedIn profile"
              />
            </a>
          </li>
          {/* <!-- <li><i className="devicon-twitter-original"></i></li> --> */}
        </ul>
      </div>
    </section>
  );
};

export default TheIntroduction;
