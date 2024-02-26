import * as S from "../../app.styled";
import Header from "../../components/header/headercomponent/Header";
import Columns from "../../components/columns/Columns";
import { cardList } from "../../data";
import { useEffect, useState } from "react";
import { Container } from "../../styled/common";
import { GlobalStyle } from "../../styled/globalstyles";
import { Outlet } from "react-router-dom";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function HomePage() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
      <Outlet />
        <Header
          addCard={addCard}
        />
        {isLoading ? (
          "Данные загружаются..."
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
    </>
  );
}
