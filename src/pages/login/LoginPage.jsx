import { Link } from "react-router-dom";
import * as S from "./loginPage.styled";
import { appRoutes } from "../../appRoutes";

export default function LoginPage() {
  return (
    <S.WrapperLogin>
      <S.ContainerLogin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>Вход</S.ModalTitle>
            <S.FormLogin>
              <input type="email" placeholder="Эл.почта"></input>
              <input type="password" placeholder="Пароль"></input>
              <S.LoginButton><Link to={appRoutes.HOME}>Войти</Link></S.LoginButton>
            </S.FormLogin>
            <S.RegisterRedirect>
              Нужно зарегистрироваться?
              <Link to={appRoutes.REGISTER}>Регистрируйтесь здесь</Link>
            </S.RegisterRedirect> 
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerLogin>
    </S.WrapperLogin>
  );
}
