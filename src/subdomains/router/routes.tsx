import { createBrowserRouter } from "react-router-dom";

import { HomeContainer } from "../home/home.container";
import { LoginContainer } from "../login/login.container";
import { LogonContainer } from "../logon/logon.container";
import { ProductsContainer } from "../products/products.container";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer />,
  },
  {
    path: "/login",
    element: <LoginContainer />,
  },
  {
    path: "/logon",
    element: <LogonContainer />,
  },
  {
    path: "/products",
    element: <ProductsContainer />,
  },
]);
