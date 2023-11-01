import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

export type Form = {
  email: string;
  password: string;
};

const schema = object({
  email: string().email("deve ser um e-mail válido").required("campo obrigatório"),
  password: string().required("campo obrigatório"),
}).required();

export const resolver = yupResolver(schema);
