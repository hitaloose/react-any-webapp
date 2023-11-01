import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";

import { RouterContainer } from "../router/router.container";

import "../../assets/css/global.css";
import "react-toastify/dist/ReactToastify.min.css";

export const AppContainer = () => {
  return (
    <RecoilRoot>
      <RouterContainer />
      <ToastContainer />
    </RecoilRoot>
  );
};
