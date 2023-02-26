import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import TheIntroduction from "../components/TheIntroduction";
import TheSkills from "../components/TheSkills";
import TheBookShelf from "../components/TheBookShelf";
import TheHometown from "../components/TheHometown";
import TheBlockQuote from "../components/TheBlockQuote";
import TheCurrentlyWorkingOn from "../components/TheCurrentlyWorkingOn";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <Link rel="stylesheet" href="devicon.min.css" />
      </Head>
      <TheIntroduction />
      <TheSkills />
      <TheHometown />
      <TheCurrentlyWorkingOn />
      {/* <section id="currently" className="main-section currently">
        <div className="pattern pattern-x"></div>
        <div className="md-container flx">
          <h2>Currently...</h2>
          <article className="currently-learning ctext">
            <h3>
              <div className="shadow-wrapper">
                <span className="flipped studious" data-emoji>
                  {" "}
                  🧐{" "}
                </span>
              </div>
              I Am Learning
            </h3>
            <ul className="padl" role="presentation">
              <li>Azure Functions</li>
              <li>Clean Code</li>
              <li>React</li>
            </ul>
          </article>
          <div className="and">&</div>
          <article className="currently-workingon ctext">
            <h3>
              Working on
              <span className="rotates" emoji>
                🛠️
              </span>
            </h3>
            <ul role="presentation">
              <li>A KanBan app</li>
              <li>My own website</li>
              <li>An Investment app</li>
            </ul>
          </article>
        </div>
      </section> */}
      <TheBookShelf />
      <TheBlockQuote />
      {/* <section className="main-section quote">
        <div className="md-container flx">
          <aside>
            <img
              src="../images/boyscout.png"
              alt="A boy scout blowing a horn"
            />
          </aside>
          <article className="quote-article">
            <figure>
              <blockquote cite="https://www.cs.dartmouth.edu/~cs50/Reading/97_Things_Every_Programmer_Should_Know.pdf">
                <p>
                  <q>Always leave the campground cleaner than you found it.</q>
                  <br />
                  If you find a mess on the ground, you clean it up regardless
                  of who might have made it. You intentionally improve the
                  environment for the next group of campers. (Actually, the
                  original form of that rule, written by Robert Stephenson Smyth
                  Baden-Powell, the father of scouting, was
                  <q>
                    Try and leave this world a little better than you found it.
                  </q>
                  )
                </p>
              </blockquote>
              <figcaption>
                – Robert C. Martin on <strong>the Boy Scout Rule</strong> in
                <cite>97 Things Every Programmer Should Know</cite>
              </figcaption>
            </figure>
          </article>
        </div>
      </section> */}
      <section id="favorites" className="main-section favorites flx-col">
        <div className="pattern pattern-y"></div>
        <div className="md-container">
          <h2>A Few Favorites</h2>
        </div>
        <div className="md-container">
          <h3>Dev Podcasts</h3>
          <ul className="ltext">
            <li>
              <article className="podcast">
                <a
                  href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuY29kaW5nYmxvY2tzLm5ldC9wb2RjYXN0LWZlZWQueG1s"
                  className="podcast-link"
                >
                  <figure>
                    <img
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHZlxmt4pe3kZtc6PzMk2sXPtXngEI9zZ5WqEuyE4j4YgugZY"
                      alt="Coding Blocks podcast logo"
                    />
                    <figcaption>
                      <h4>Coding Blocks</h4>
                      <small>A. Underwood, M. Outlaw, J. Zack</small>
                    </figcaption>
                  </figure>
                </a>
              </article>
            </li>
            <li>
              <article className="podcast">
                <a
                  href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnN5bnRheC5mbS9yc3M"
                  className="podcast-link"
                >
                  <figure>
                    <img
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_DOr_E0YhD_4q5arVX4MVp4bC87IfEh50gmS037HK-WyaGISv"
                      alt="Syntax podcast logo"
                    />
                    <figcaption>
                      <h4>Syntax</h4>
                      <small>Wes Bos & Scott Tolinski</small>
                    </figcaption>
                  </figure>
                </a>
              </article>
            </li>
            <li>
              <article className="podcast">
                <a
                  href="https://podcasts.google.com/feed/aHR0cHM6Ly9zaG9wdGFsa3Nob3cuY29tL2ZlZWQvcG9kY2FzdA"
                  className="podcast-link"
                >
                  <figure>
                    <img
                      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRiTaHLEGNpQd1YJGWKcZpH3JYjkrOROO303Tz6krK0nPkO93C"
                      alt="ShopTalk podcast logo"
                    />
                    <figcaption>
                      <h4>ShopTalk</h4>
                      <small>ShopTalk</small>
                    </figcaption>
                  </figure>
                </a>
              </article>
            </li>
            <li>
              <article className="podcast">
                <a
                  href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5mZWVkd3JlbmNoLmNvbS9qcy1qYWJiZXIucnNz"
                  target="_blank"
                  className="podcast-link"
                >
                  <figure>
                    <img
                      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmnN40h7oelbXM-GRCUZD7Zx4yio3nV5r2zdIMgNis9R5K7HE"
                      alt="JavaScript Jabber podcast logo"
                    />
                    <figcaption>
                      <h4>JavaScript Jabber</h4>
                      <small>Top End Devs</small>
                    </figcaption>
                  </figure>
                </a>
              </article>
            </li>
            <li>
              <article className="podcast">
                <a
                  href="https://podcasts.google.com/feed/aHR0cHM6Ly90aGVkb3RuZXRjb3JlcG9kY2FzdC5saWJzeW4uY29tL3Jzcw"
                  className="podcast-link"
                >
                  <figure>
                    <img
                      src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsmngZPTEBidXSe2PZr_zQ-LI9XFJa50claNHxy9DZM8sjQO0q"
                      alt="The .NET Core Podcast logo"
                    />
                    <figcaption>
                      <h4>The .NET Core Podcast</h4>
                      <small>Jamie Taylor</small>
                    </figcaption>
                  </figure>
                </a>
              </article>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
