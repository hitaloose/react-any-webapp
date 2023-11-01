import { PrivateLayout } from "../../shared/layouts/private-layout";
import { ProductsScreen } from "./products.screen";

export const ProductsContainer = () => {
  return (
    <PrivateLayout>
      <ProductsScreen />
    </PrivateLayout>
  );
};
