import { useState } from "react";
import * as S from "./Popuser.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../appRoutes";
import { useUserContext } from "../../contexts/usercontext";

export default function PopUser() {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useUserContext()

  return (
    <>
      <S.HeaderUserBtn onClick={() => setIsOpen(!isOpen)}>
        {user.name}
      </S.HeaderUserBtn>
      {isOpen && (
        <S.HeaderPopUserSet id="user-set-target">
          <S.PopUserName>{user.name}</S.PopUserName>
          <S.PopUserMail>{user.login}</S.PopUserMail>
          {/* <S.PopUserTheme>
            <p>Темная тема</p>
            <S.ThemeCheckbox type="checkbox" name="checkbox" />
          </S.PopUserTheme> */}

          <Link to={appRoutes.LOGOUT}>
            <S.PopExitBtn>
              Выйти
            </S.PopExitBtn>
          </Link>
        </S.HeaderPopUserSet>
      )}
    </>
  );
}
