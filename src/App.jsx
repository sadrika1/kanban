import "./App.css";
import Header from "./components/header/headercomponent/Header";
import Columns from "./components/columns/Columns";
import TaskBrowse from "./components/taskbrowse/TaskBrowse";
import { cardList } from "./data";
import { useEffect, useState } from "react";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function App() {
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
      theme: "Wev Design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }
  return (
    <div className="wrapper">
      <Header addCard={addCard} />
      {isLoading ? (
        "Данные загружаются..."
      ) : (
        <main class="main">
          <div class="container">
            <div class="main__block">
              <div class="main__content">
                {statusList.map((status) => (
                  <Columns
                    title={status}
                    key={status}
                    cardList={cards.filter((card) => card.status === status)}
                  />
                ))}
                <TaskBrowse />
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
