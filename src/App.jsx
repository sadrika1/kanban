import "./App.css";
import * as S from "./app.styled";
import Header from "./components/header/headercomponent/Header";
import Columns from "./components/columns/Columns";
import TaskBrowse from "./components/taskbrowse/TaskBrowse";
import { cardList } from "./data";
import { useEffect, useState } from "react";
import { Container } from "./styled/common";
import { GlobalStyle } from "./styled/globalstyles";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function App({
  isOpenNewTaskModal,
  setIsOpenNewTaskModal,
  isOpenEditTaskModal,
  setIsOpenEditTaskModal,
}) {
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
        <Header
          addCard={addCard}
          isOpenNewTaskModal={isOpenNewTaskModal}
          setIsOpenNewTaskModal={setIsOpenNewTaskModal}
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
                  <TaskBrowse/>
                </S.MainContent>
              </S.MainBlock>
            </Container>
          </S.Main>
        )}
      </S.Wrapper>
    </>
  );
}

export default App;
