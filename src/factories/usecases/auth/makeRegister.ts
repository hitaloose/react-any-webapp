import { Register } from "../../../usecases/auth/register/register.impl";

export const makeRegister = () => {
  return new Register();
};
