import { Link, useNavigate } from "react-router-dom";
import * as S from "./Logout.styled";
import { appRoutes } from "../../appRoutes";
import { useUserContext } from "../../contexts/usercontext";

export default function LogoutPage() {
  const { logout } = useUserContext();
  const navigate = useNavigate();
  return (
    <S.PopExit className="pop-exit" id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>Выйти из аккаунта?</S.PopExitTitle>
          <form id="formExit" action="#">
            <S.PopExitForm>
              <Link to={appRoutes.LOGIN}>
                <S.ButtonExitYes
                  onClick={() => {
                    logout();
                    navigate(appRoutes.LOGIN);
                  }}
                >
                  Да, выйти
                </S.ButtonExitYes>
              </Link>

              <Link to={appRoutes.HOME}>
                <S.ButtonExitNo>Нет, остаться</S.ButtonExitNo>
              </Link>
            </S.PopExitForm>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
