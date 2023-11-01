/* eslint-disable @typescript-eslint/no-namespace */

import { User } from "../../../shared/entities/user";

export namespace IAuthenticate {
  export type Input = {
    email: string;
    password: string;
  };

  export type Output = {
    user: User;
    token: string;
  };

  export interface Usecase {
    run(input: Input): Promise<Output>;
  }
}
