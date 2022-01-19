import { Page1 } from "../components/Page1";
import { Page1A } from "../components/Page1A";
import { Page1B } from "../components/Page1B";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/page1A",
    exact: false,
    children: <Page1A />
  },
  {
    path: "/page1B",
    exact: false,
    children: <Page1B />
  }
];
