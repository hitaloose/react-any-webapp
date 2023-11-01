import { Authenticate } from "../../../usecases/auth/authenticate/authenticate.impl";

export const makeAuthenticate = () => {
  return new Authenticate();
};
