const ThePodcasts = () => {
  return (
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
  );
};

export default ThePodcasts;
