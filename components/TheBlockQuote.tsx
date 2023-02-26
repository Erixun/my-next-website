import utilStyle from "../styles/utils.module.scss";

const TheBlockQuote = () => {
  return (
    <section className="main-section quote">
      <div
        className={["md-container", utilStyle.mdContainer, utilStyle.flx].join(
          " "
        )}
      >
        <aside>
          <img src="../images/boyscout.png" alt="A boy scout blowing a horn" />
        </aside>
        <article className="quote-article">
          <figure>
            <blockquote cite="https://www.cs.dartmouth.edu/~cs50/Reading/97_Things_Every_Programmer_Should_Know.pdf">
              <p>
                <q>Always leave the campground cleaner than you found it.</q>
                <br />
                If you find a mess on the ground, you clean it up regardless of
                who might have made it. You intentionally improve the
                environment for the next group of campers. (Actually, the
                original form of that rule, written by Robert Stephenson Smyth
                Baden-Powell, the father of scouting, was&nbsp;
                <q>
                  Try and leave this world a little better than you found it.
                </q>
                )
              </p>
            </blockquote>
            <figcaption>
              – Robert C. Martin on <strong>the Boy Scout Rule</strong> in&nbsp;
              <cite>97 Things Every Programmer Should Know</cite>
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
};

export default TheBlockQuote;
