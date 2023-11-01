import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { authAtom } from "../../atoms/auth.atom";

type Props = {
  children: ReactNode;
};

export const PublicLayout = (props: Props) => {
  const [firstRender, setFirstRender] = useState(false);
  const [auth] = useRecoilState(authAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuth) {
      navigate("/");
    }

    setFirstRender(true);
  }, [auth.isAuth, navigate]);

  if (!firstRender) return <></>;

  return <>{props.children}</>;
};
