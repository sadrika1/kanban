import { useState } from "react";
import * as S from "./Popuser.styled";

export default function PopUser() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.HeaderUserBtn onClick={() => setIsOpen(!isOpen)} className="_hover02">
        Ivan Ivanov
      </S.HeaderUserBtn>
      {isOpen && (
        <S.HeaderPopUserSet id="user-set-target">
          <S.PopUserName>Ivan Ivanov</S.PopUserName>
          <S.PopUserMail>ivan.ivanov@gmail.com</S.PopUserMail>
          <S.PopUserTheme>
            <p>Темная тема</p>
            <S.ThemeCheckbox type="checkbox"name="checkbox" />
          </S.PopUserTheme>
          <S.PopExitBtn type="button" className="_hover03">
            <a href="#popExit">Выйти</a>
          </S.PopExitBtn>
        </S.HeaderPopUserSet>
      )}
    </>
  );
}
