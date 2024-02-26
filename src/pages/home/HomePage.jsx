import * as S from "../../app.styled";
import Header from "../../components/header/headercomponent/Header";
import Columns from "../../components/columns/Columns";
import { useEffect, useState } from "react";
import { Container } from "../../styled/common";
import { Outlet } from "react-router-dom";
import LoaderAnimation from "../../loader/loader";
import { getTasks } from "../../API";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function HomePage({ user }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  function addCard() {
    const newCard = {
      id: cards.lenght + 1,
      theme: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }

  useEffect(() => {
    getTasks({ token: user.token })
      .then((tasks) => {
        setCards(tasks.tasks);
        setIsLoading(false);
        console.log(tasks);
      })
      .catch((error) => {});
  }, [user]);

  return (
    <S.Wrapper>
      <Outlet />
      <Header addCard={addCard} />
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
