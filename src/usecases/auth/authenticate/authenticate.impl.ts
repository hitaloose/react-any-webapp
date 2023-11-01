import { IAuthenticate } from "./authenticate.interface";

export class Authenticate implements IAuthenticate.Usecase {
  async run(input: IAuthenticate.Input): Promise<IAuthenticate.Output> {
    if (input.email !== "hitaloose@gmail.com") {
      throw new Error("E-mail inválido");
    }
    if (input.password !== "123456") {
      throw new Error("Senha inválido");
    }

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
