import { IAuthenticate } from "./authenticate.interface";

export class AuthenticateStub implements IAuthenticate.Usecase {
  async run(): Promise<IAuthenticate.Output> {
    return {
      token: "jwt-token",
      user: {
        name: "Hitalo Loose",
        email: "hitaloose@gmail.com",
        id: "unique-id",
      },
    };
  }
}
