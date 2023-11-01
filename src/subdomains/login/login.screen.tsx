import { toast } from "react-toastify";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { IAuthenticate } from "../../usecases/auth/authenticate/authenticate.interface";
import { authAtom } from "../../shared/atoms/auth.atom";
import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";
import { Form, resolver } from "./login.form";
import { errorHandler } from "../../shared/utils/error-handler";

type Props = {
  authenticate: IAuthenticate.Usecase;
};

export const LoginScreen = (props: Props) => {
  const { authenticate } = props;

  const { control, handleSubmit } = useForm<Form>({ resolver });
  const [, setAuth] = useRecoilState(authAtom);

  const handleSubmitClick = useCallback(
    async (values: Form) => {
      try {
        const { email, password } = values;

        const { user, token } = await authenticate.run({ email, password });

        setAuth({ isAuth: true, token, user });
      } catch (error) {
        toast.error(errorHandler(error));
      }
    },
    [authenticate, setAuth]
  );

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border border-cyan-900 p-2 rounded shadow w-full max-w-md">
        <h1 className="text-center mb-8 text-2xl">Login</h1>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleSubmitClick)}
        >
          <Input
            control={control}
            name="email"
            type="email"
            data-testid="email"
            label="E-mail"
          />

          <Input
            control={control}
            name="password"
            type="password"
            data-testid="password"
            label="Senha"
          />

          <span className="text-xs text-right">
            Para criar sua conta{" "}
            <Link className="text-cyan-900" to="/logon">
              clique aqui
            </Link>
          </span>

          <div className="flex justify-center items-center">
            <Button type="submit" data-testid="submit-btn">
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
