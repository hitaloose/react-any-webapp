/* eslint-disable @typescript-eslint/no-namespace */

import { User } from "../../../shared/entities/user";

export namespace IRegister {
  export type Input = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  };

  export type Output = {
    token: string;
    user: User;
  };

  export interface Usecase {
    run(input: Input): Promise<Output>;
  }
}
