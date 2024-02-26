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
              <Link to={appRoutes.LOGIN}>
                <S.ButtonExitYes className=" _hover01" id="exitYes">
                  Да, выйти
                </S.ButtonExitYes>
              </Link>

              <Link to={appRoutes.HOME}>
                <S.ButtonExitNo className=" _hover03" id="exitNo">
                  Нет, остаться
                </S.ButtonExitNo>
              </Link>
            </S.PopExitForm>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
