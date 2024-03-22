import { Link } from "react-router-dom";
import Calendar from "../../../utils/Calendar";
import * as S from "./CreateTaskModal.styled";
import { appRoutes } from "../../../appRoutes";
import { useEffect, useState } from "react";
import { fetchAddTask } from "../../../API";
import { useUserContext } from "../../../contexts/usercontext";
import { Error } from "../../../pages/login/loginPage.styled";

export default function CreateTaskModal() {
  const { user } = useUserContext();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });
  const [selectedDate, setSelectedDate] = useState();
  const [error, setError] = useState(null);

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...newTask,
      date: selectedDate,
    };
    if (!newTask.title || !newTask.description || !newTask.topic) {
      setError("Пожалуйста, заполните все поля!");
      return;
    }
    try {
      await fetchAddTask({
        task: taskData,
        token: user.token,
      });
    } catch (error) {
      console.error(error.message);
      setError("Неизвестная ошибка");
    }
    alert("Задача успешно добавлена!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };
  useEffect(() => {
    setError(null);
  }, [newTask]);

  return (
    <>
      <S.PopNewCard id="popNewCard">
        <S.PopNewCardContainer>
          <S.PopNewCardBlock>
            <S.PopNewCardContent>
              <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
              <S.PopNewCardClose>
                <Link to={appRoutes.HOME}>&#10006;</Link>
              </S.PopNewCardClose>
              <S.PopNewCardWrap>
                <S.PopNewCardForm id="formNewCard" action="#">
                  <S.CardFormNewBlock>
                    <S.LabelFormSubtitle htmlFor="formTitle">
                      Название задачи
                    </S.LabelFormSubtitle>
                    <S.CardFromNewInput
                      type="text"
                      id="formTitle"
                      name="title"
                      onChange={handleInputChange}
                      value={newTask.title}
                      placeholder="Введите название задачи..."
                      autoFocus
                    />
                  </S.CardFormNewBlock>
                  <S.CardFormNewBlock>
                    <S.LabelFormSubtitle htmlFor="textArea">
                      Описание задачи
                    </S.LabelFormSubtitle>
                    <S.CardFromNewArea
                      as="textarea"
                      name="description"
                      onChange={handleInputChange}
                      value={newTask.description}
                      id="textArea"
                      placeholder="Введите описание задачи..."
                    ></S.CardFromNewArea>
                  </S.CardFormNewBlock>
                </S.PopNewCardForm>
                <S.Calendar>
                  <S.CalendarTitle>Даты</S.CalendarTitle>
                  <Calendar
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />
                </S.Calendar>
              </S.PopNewCardWrap>
              <S.CategoriesTitle>Категория</S.CategoriesTitle>
              <S.CategoriesThemeBlock>
                <S.RadioLabel
                  $color="_orange"
                  isChecked={newTask.topic === "Web Design"}
                >
                  <S.RadioInput
                    type="radio"
                    name="topic"
                    topic="Web Design"
                    value="Web Design"
                    onChange={handleInputChange}
                  />
                  Web Design
                </S.RadioLabel>

                <S.RadioLabel
                  $color="_green"
                  isChecked={newTask.topic === "Research"}
                >
                  <S.RadioInput
                    type="radio"
                    name="topic"
                    value="Research"
                    onChange={handleInputChange}
                  />
                  Research
                </S.RadioLabel>
                <S.RadioLabel
                  $color="_purple"
                  isChecked={newTask.topic === "Copywriting"}
                >
                  <S.RadioInput
                    type="radio"
                    name="topic"
                    value="Copywriting"
                    onChange={handleInputChange}
                  />
                  Copywriting
                </S.RadioLabel>
              </S.CategoriesThemeBlock>
              {error && <Error>{error}</Error>}
              <S.CreateNewCardButton onClick={handleTaskSubmit}>
                Создать задачу
              </S.CreateNewCardButton>
            </S.PopNewCardContent>
          </S.PopNewCardBlock>
        </S.PopNewCardContainer>
      </S.PopNewCard>
    </>
  );
}
