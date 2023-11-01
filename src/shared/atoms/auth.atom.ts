import { atom } from "recoil";
import { User } from "../entities/user";
import { storageAtom } from "../utils/storage-atom";

type State =
  | {
      isAuth: true;
      user: User;
      token: string;
    }
  | { isAuth: false };

export const authAtom = atom<State>({
  key: "auth",
  default: {
    isAuth: false,
  },
  effects: [storageAtom("auth")],
});
