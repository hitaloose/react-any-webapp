import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";

export type Form = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const schema = object({
  name: string().required("campo obrigatório"),
  email: string()
    .email("deve ser um e-mail válido")
    .required("campo obrigatório"),
  password: string().required("campo obrigatório"),
  passwordConfirmation: string()
    .oneOf([ref("password")], "senhas não batem")
    .required("campo obrigatório"),
}).required();

export const resolver = yupResolver(schema);
