import { Link, Outlet } from "react-router-dom";

export const Page1 = () => {
  return (
    <>
      <h1>Page1</h1>
      <p>this is Page1.</p>
      <br />
      <Link to="/page1/page1A">page1A</Link>
      <br />
      <Link to="/page1/page1B">page1B</Link>
      <Outlet />
    </>
  );
};
