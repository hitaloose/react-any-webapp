import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import { errorHandler } from "../../shared/utils/error-handler";
import { IRegister } from "../../usecases/auth/register/register.interface";
import { authAtom } from "../../shared/atoms/auth.atom";
import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";
import { Form, resolver } from "./logon.form";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

type Props = {
  register: IRegister.Usecase;
};

export const LogonScreen = (props: Props) => {
  const { register } = props;

  const { control, handleSubmit } = useForm<Form>({ resolver });
  const [, setAuth] = useRecoilState(authAtom);

  const handleSubmitClick = useCallback(
    async (values: Form) => {
      try {
        const { name, email, password, passwordConfirmation } = values;

        const { user, token } = await register.run({
          name,
          email,
          password,
          passwordConfirmation,
        });

        setAuth({ isAuth: true, token, user });
      } catch (err) {
        toast.error(errorHandler(err));
      }
    },
    [register, setAuth]
  );

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border border-cyan-900 p-2 rounded shadow w-full max-w-md">
        <h1 className="text-center mb-8 text-2xl">Registro</h1>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleSubmitClick)}
        >
          <Input label="Nome" name="name" control={control} />

          <Input label="E-mail" type="email" name="email" control={control} />

          <Input
            label="Senha"
            type="password"
            name="password"
            control={control}
          />

          <Input
            label="Confirmar senha"
            type="password"
            name="passwordConfirmation"
            control={control}
          />

          <span className="text-xs text-right">
            Para entrar em sua conta{" "}
            <Link className="text-cyan-900" to="/login">
              clique aqui
            </Link>
          </span>

          <div className="flex justify-center items-center">
            <Button type="submit">Registrar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
