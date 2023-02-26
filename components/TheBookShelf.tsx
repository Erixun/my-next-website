const TheBookShelf = () => {
  return (
    <section id="Books" className="main-section stand-out">
      <div className="lg-container">
        <header>
          <h2 style={{ borderBottom: "4px solid" }}>Recommended Books</h2>
        </header>
        <div className="card-grid">
          <article className="book clean-code" tabIndex={0}>
            <a
              href="https://www.goodreads.com/book/show/3735293-clean-code"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", height: "100%" }}
            ></a>
          </article>
          <article className="book imposters" tabIndex={0}>
            <a
              href="https://bigmachine.io/products/the-imposters-handbook/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", height: "100%" }}
            ></a>
          </article>
          <article className="book pragmatic" tabIndex={0}>
            <a
              href="https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", height: "100%" }}
            ></a>
          </article>
          <article className="book code-complete" tabIndex={0}>
            <a
              href="https://www.goodreads.com/book/show/4845.Code_Complete"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", height: "100%" }}
            ></a>
          </article>
          <article className="book typescript" tabIndex={0}>
            <a
              href="https://www.goodreads.com/book/show/45362865-programming-typescript"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", height: "100%" }}
            ></a>
          </article>
          <article className="book javascript" tabIndex={0}>
            <a
              href="https://www.goodreads.com/book/show/61157620-javascript"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", height: "100%" }}
            ></a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TheBookShelf;
