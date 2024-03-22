import { Link, useNavigate } from "react-router-dom";
import * as S from "./loginPage.styled";
import { appRoutes } from "../../appRoutes";
import { useEffect, useState } from "react";
import { fetchLogin } from "../../API";
import { useUserContext } from "../../contexts/usercontext";

export default function LoginPage() {
  const { login } = useUserContext();
  const [loginData, setLoginData] = useState({ login: "", password: "" });
  const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setLoginData({
      ...loginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginData.login || !loginData.password) {
      setError("Введите логин или пароль!");
      return;
    }
    try {
      await fetchLogin(loginData).then((data) => {
        login(data.user);
      });
      navigate(appRoutes.HOME);
    } catch (error) {
      console.error("fall", error);
      setError('Ошибка входа');
    }
  };

  useEffect(() => {
    // убираем ошибку если меняются данные в форме
    setError(null);
  }, [loginData]);

  return (
    <S.WrapperLogin>
      <S.ContainerLogin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>Вход</S.ModalTitle>
            <S.FormLogin>
              <input
                onChange={handleInputChange}
                value={loginData.login}
                type="email"
                name="login"
                placeholder="Эл.почта"
              ></input>
              <input
                onChange={handleInputChange}
                value={loginData.password}
                type="password"
                name="password"
                placeholder="Пароль"
              ></input>
              {error && <S.Error>{error}</S.Error>}
              <S.LoginButton onClick={handleLogin}>Войти</S.LoginButton>
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
