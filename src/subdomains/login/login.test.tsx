import { describe, expect, it, vitest } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";

import { LoginScreen } from "./login.screen";
import { AuthenticateStub } from "../../usecases/auth/authenticate/authenticate.mock";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

describe("<LoginScreen />", () => {
  it("should call authenticate with correct values", async () => {
    const authenticateStub = new AuthenticateStub();
    const spy = vitest.spyOn(authenticateStub, "run");

    render(
      <BrowserRouter>
        <RecoilRoot>
          <LoginScreen authenticate={authenticateStub} />
        </RecoilRoot>
      </BrowserRouter>
    );

    await act(async () => {
      fireEvent.change(screen.getByTestId("email"), {
        target: { value: "hitaloose@gmail.com" },
      });

      fireEvent.change(screen.getByTestId("password"), {
        target: { value: "password" },
      });

      fireEvent.click(screen.getByTestId("submit-btn"));
    });

    expect(spy).toHaveBeenLastCalledWith({
      email: "hitaloose@gmail.com",
      password: "password",
    });
  });

  it("should show error mesage", async () => {
    const authenticateStub = new AuthenticateStub();
    render(
      <BrowserRouter>
        <RecoilRoot>
          <LoginScreen authenticate={authenticateStub} />
        </RecoilRoot>
      </BrowserRouter>
    );

    await act(async () => {
      fireEvent.change(screen.getByTestId("email"), {
        target: { value: "hitaloose@gmail.com" },
      });

      fireEvent.click(screen.getByTestId("submit-btn"));
    });

    expect(screen.getByText("campo obrigatório")).toBeTruthy();
  });
});
