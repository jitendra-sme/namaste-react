const Shimmer = () => {
  return (
    <div>
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-64 p-1 float-left m-2 bg-gray-100">
            <div className="w-64 h-64"></div>
            <h4>&nbsp;</h4>
            <div className="bg-gray-200 h-5">&nbsp;</div>
            <div className="flex flex-nowrap justify-around align-middle">
              <span className="h-5 bg-gray-200">&nbsp;</span>
              <span className="middot">&middot;</span>
              <span className="h-5 bg-gray-200">&nbsp;</span>
              <span className="middot">&middot;</span>
              <span className="h-5 bg-gray-200">&nbsp;</span>
            </div>
          </div>
        ))}
      <div style={{ clear: "both" }}></div>
    </div>
  );
};
export default Shimmer;
