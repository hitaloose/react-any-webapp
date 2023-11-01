import { IRegister } from "./register.interface";

export class Register implements IRegister.Usecase {
  async run(input: IRegister.Input): Promise<IRegister.Output> {
    if (input.password !== input.passwordConfirmation) {
      throw new Error("Senhas não conferem");
    }

    return {
      token: "jwt-token",
      user: {
        id: "unique-id",
        name: "Registered User",
        email: "registereduser@email.com",
      },
    };
  }
}
