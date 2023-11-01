import { ReactNode, useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { authAtom } from "../../atoms/auth.atom";

type Props = {
  children: ReactNode;
};

export const PrivateLayout = (props: Props) => {
  const [firstRender, setFirstRender] = useState(false);
  const [auth, setAuth] = useRecoilState(authAtom);
  const navigate = useNavigate();

  const handleExitClick = useCallback(() => {
    setAuth({ isAuth: false });
  }, [setAuth]);

  useEffect(() => {
    console.log("check render");
    if (!auth.isAuth) {
      navigate("/login");
    }

    setFirstRender(true);
  }, [auth.isAuth, navigate]);

  if (!firstRender) return <></>;

  return (
    <div className="h-screen">
      <div className="bg-cyan-900 h-12 flex justify-between items-center px-2 shadow">
        <h1 className="text-gray-100">
          Bem vindo, {auth.isAuth && auth.user.name}
        </h1>
        <button
          className="py-2 px-4 text-gray-100 hover:text-gray-200"
          onClick={handleExitClick}
        >
          Sair
        </button>
      </div>

      <div className="flex h-[calc(100%-3rem)]">
        <div className="w-56 bg-cyan-950">
          <ul className="mt-2">
            <li className="text-gray-100 hover:text-gray-200 p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-100 hover:text-gray-200 p-2">
              <Link to="/products">Produtos</Link>
            </li>
          </ul>
        </div>

        <div className="p-4">{props.children}</div>
      </div>
    </div>
  );
};
