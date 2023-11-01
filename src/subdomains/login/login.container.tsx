import { makeAuthenticate } from "../../factories/usecases/auth/makeAuthenticate";
import { PublicLayout } from "../../shared/layouts/public-layout";
import { LoginScreen } from "./login.screen";

export const LoginContainer = () => {
  return (
    <PublicLayout>
      <LoginScreen authenticate={makeAuthenticate()} />
    </PublicLayout>
  );
};
