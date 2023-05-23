export default ShimmerCustom = () => {
  return (
    <div>
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="card" style={{ float: "left" }}>
            <div className="shimmer"></div>
            <h4>&nbsp;</h4>
            <div className="shimmer-md">&nbsp;</div>
            <div className="info-bar">
              <span className="shimmer-sm">&nbsp;</span>
              <span className="middot">&middot;</span>
              <span className="shimmer-sm">&nbsp;</span>
              <span className="middot">&middot;</span>
              <span className="shimmer-sm">&nbsp;</span>
            </div>
          </div>
        ))}
      <div style={{ clear: "both" }}></div>
    </div>
  );
};
