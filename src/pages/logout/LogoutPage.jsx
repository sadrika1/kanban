import { Link } from "react-router-dom";
import * as S from "./Logout.styled";
import { appRoutes } from "../../appRoutes";

export default function LogoutPage() {
  return (
    <S.PopExit className="pop-exit" id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>Выйти из аккаунта?</S.PopExitTitle>
          <form id="formExit" action="#">
            <S.PopExitForm>
              <S.ButtonExitYes className=" _hover01" id="exitYes">
                <Link to={appRoutes.LOGIN}>Да, выйти</Link>
              </S.ButtonExitYes>
              <S.ButtonExitNo className=" _hover03" id="exitNo">
                <Link to={appRoutes.HOME}>Нет, остаться</Link>
              </S.ButtonExitNo>
            </S.PopExitForm>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
