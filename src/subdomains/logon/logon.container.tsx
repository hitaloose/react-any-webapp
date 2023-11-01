import { makeRegister } from "../../factories/usecases/auth/makeRegister";
import { PublicLayout } from "../../shared/layouts/public-layout";
import { LogonScreen } from "./logon.screen";

export const LogonContainer = () => {
  return (
    <PublicLayout>
      <LogonScreen register={makeRegister()} />
    </PublicLayout>
  );
};
