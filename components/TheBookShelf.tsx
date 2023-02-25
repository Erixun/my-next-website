const TheBookShelf = () => {
  return (
    <section id="Books" className="main-section stand-out">
      <div className="lg-container">
        <header>
          <h2 style={{ borderBottom: "4px solid" }}>Recommended Books</h2>
        </header>
        {/* <ul
          v-if="skills.length > 0"
          className="skill-cards"
          role="presentation"
        >
          {skills.map((skill, index) => (
            <BaseSkillCard key={index} data={skill} />
          ))}
        </ul> */}
        <div className="card-grid">
          <article className="book clean-code" tabIndex={0}>
            {/* <h3>Book title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              obcaecati, maxime nesciunt assumenda harum delectus reprehenderit
              numquam veritatis nam odio quisquam fugiat nostrum quas aliquam
              molestiae? Reiciendis vitae aut ea.
            </p> */}
          </article>
          <article className="book imposters" tabIndex={0}>
            {/* <h3>Book title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              obcaecati, maxime nesciunt assumenda harum delectus reprehenderit
              numquam veritatis nam odio quisquam fugiat nostrum quas aliquam
              molestiae? Reiciendis vitae aut ea.
            </p> */}
          </article>
          <article className="book pragmatic" tabIndex={0}>
            {/* <h3>Book title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              obcaecati, maxime nesciunt assumenda harum delectus reprehenderit
              numquam veritatis nam odio quisquam fugiat nostrum quas aliquam
              molestiae? Reiciendis vitae aut ea.
            </p> */}
          </article>
          <article className="book code-complete" tabIndex={0}>
            {/* <h3>Book title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              obcaecati, maxime nesciunt assumenda harum delectus reprehenderit
              numquam veritatis nam odio quisquam fugiat nostrum quas aliquam
              molestiae? Reiciendis vitae aut ea.
            </p> */}
          </article>
          <article className="book typescript" tabIndex={0}>
            {/* <h3>Book title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              obcaecati, maxime nesciunt assumenda harum delectus reprehenderit
              numquam veritatis nam odio quisquam fugiat nostrum quas aliquam
              molestiae? Reiciendis vitae aut ea.
            </p> */}
          </article>
          <article className="book javascript" tabIndex={0}>
            {/* <h3>Book title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              obcaecati, maxime nesciunt assumenda harum delectus reprehenderit
              numquam veritatis nam odio quisquam fugiat nostrum quas aliquam
              molestiae? Reiciendis vitae aut ea.
            </p> */}
          </article>
        </div>
      </div>
    </section>
  );
};

export default TheBookShelf;
