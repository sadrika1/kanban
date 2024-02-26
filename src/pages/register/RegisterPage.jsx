import { useEffect, useState } from "react";
import * as S from "../login/loginPage.styled";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../appRoutes";
import { fetchReg } from "../../API";

export default function RegisterPage() {
  const [registerData, setRegisterData] = useState({
    login: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setRegisterData({
      ...registerData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      !registerData.login ||
      !registerData.password ||
      !registerData.name
    ) {
      setError("Заполните обязательные поля");
      return;
    }
    try {
      await fetchReg(registerData).then((data) => {
        // login(data.user);
        console.log("Correct!", data);
      });
      navigate(appRoutes.HOME);
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      setError(error.message || "Неизвестная ошибка регистрации");
    }
  };

  useEffect(() => {
    setError(null);
  }, [registerData]);

  return (
    <S.WrapperLogin>
      <S.ContainerLogin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTitle>Регистрация</S.ModalTitle>
            <S.FormLogin>
              <input
                onChange={handleInputChange}
                value={registerData.name}
                type="text"
                name="name"
                placeholder="Имя"
              ></input>
              <input
                onChange={handleInputChange}
                value={registerData.login}
                type="email"
                name="login"
                placeholder="Эл.почта"
              ></input>
              <input
                onChange={handleInputChange}
                value={registerData.password}
                type="password"
                name="password"
                placeholder="Пароль"
              ></input>
              {error && <S.Error>{error}</S.Error>}
              <S.LoginButton onClick={handleRegister}>
                Зарегистрироваться
              </S.LoginButton>
            </S.FormLogin>
            <S.RegisterRedirect>
              Уже есть аккаунт?
              <Link to={appRoutes.LOGIN}>Войти здесь</Link>
            </S.RegisterRedirect>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerLogin>
    </S.WrapperLogin>
  );
}
