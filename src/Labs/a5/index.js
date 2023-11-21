import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
function Assignment5() {
  const LAB_BASE = process.env.REACT_APP_LAB_BASE;
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={`${LAB_BASE}/a5/welcome`}
          className="list-group-item">
          Welcome
        </a>
      </div>
      {/* <SimpleAPIExamples /> */}
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;