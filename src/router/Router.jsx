import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Page1 } from "../components/Page1";
import { Page1A } from "../components/Page1A";
import { Page1B } from "../components/Page1B";
import { Page2 } from "../components/Page2";
import { UrlParameter } from "../components/UrlParameter";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="page1" element={<Page1 />}>
        <Route path="page1A" element={<Page1A />} />
        <Route path="page1B" element={<Page1B />} />
      </Route>
      <Route path="page2" element={<Page2 />}>
        <Route path=":id" element={<UrlParameter />} />
      </Route>
    </Routes>
  );
};
