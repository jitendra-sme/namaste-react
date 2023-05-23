import { useRouteError } from "react-router-dom";
const Error = () => {
  const { status, statusText, data } = useRouteError();
  return (
    <>
      <h1>{data}</h1>
      <h2>{status + ": " + statusText}</h2>
    </>
  );
};
export default Error;
