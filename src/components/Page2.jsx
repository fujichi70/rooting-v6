import { Link, Outlet } from "react-router-dom";

export const Page2 = () => {
  return (
    <>
      <h1>Page2</h1>
      <p>this is Page2.</p>
      <Link to="/page2/100">URL parameter</Link>
      <br />
      <Link to="/page2/100?name=hogehoge">Query parameter</Link>
      <Outlet />
    </>
  );
};
