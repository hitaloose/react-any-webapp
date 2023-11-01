import { PrivateLayout } from "../../shared/layouts/private-layout";
import { HomeScreen } from "./home.screen";

export const HomeContainer = () => (
  <PrivateLayout>
    <HomeScreen />
  </PrivateLayout>
);
