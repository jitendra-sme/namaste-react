export default Shimmer = () => {
  return (
    <section className="container">
      <div className="search-bar"></div>
      <div className="card-container">
        <div className="card">
          <div
            style={{
              backgroundColor: "lightgray",
              width: "100%",
              height: "100px",
            }}
          ></div>
          <h4>&nbsp;</h4>
          <div title="cuisine">&nbsp;</div>
          <div className="info-bar">
            <span className="ratings">&#9733;</span>
            <span className="middot">&middot;</span>
            <span>&nbsp; mins</span>
            <span className="middot">&middot;</span>
            <span>&#8377;&nbsp; for two</span>
          </div>
        </div>
      </div>
    </section>
  );
};
