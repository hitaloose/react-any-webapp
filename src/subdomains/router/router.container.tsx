import { RouterProvider } from "react-router-dom";

import { routes } from "./routes";

export const RouterContainer = () => {
  return <RouterProvider router={routes} />;
};
