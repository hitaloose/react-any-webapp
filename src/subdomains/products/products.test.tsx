import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductsScreen } from "./products.screen";

describe("<ProductsScreen />", () => {
  it("should show title", () => {
    render(<ProductsScreen />);

    expect(screen.getByText(/Produtos/i)).toBeDefined();
  });
});
