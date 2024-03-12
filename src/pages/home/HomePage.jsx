import * as S from "../../app.styled";
import Header from "../../components/header/headercomponent/Header";
import Columns from "../../components/columns/Columns";
import { useEffect, useState } from "react";
import { Container } from "../../styled/common";
import { Outlet } from "react-router-dom";
import LoaderAnimation from "../../loader/loader";
import { getTasks } from "../../API";
import { useUserContext } from "../../contexts/usercontext";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function HomePage() {
  const {user} = useUserContext()
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);
  useEffect(() => {
    getTasks({ token: user.token })
      .then((tasks) => {
        setCards(tasks.tasks);
        setIsLoading(false);
        console.log(tasks);
      })
      .catch((error) => {
        alert(error)
      });
  }, [user]);

  return (
    <S.Wrapper>
      <Outlet />
      <Header />
      {isLoading ? (
        <LoaderAnimation />
      ) : (
        <S.Main>
          <Container>
            <S.MainBlock>
              <S.MainContent>
                {statusList.map((status) => (
                  <Columns
                    title={status}
                    key={status}
                    cardList={cards.filter((card) => card.status === status)}
                  />
                ))}
              </S.MainContent>
            </S.MainBlock>
          </Container>
        </S.Main>
      )}
    </S.Wrapper>
  );
}
