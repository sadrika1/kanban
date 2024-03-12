import { Link } from "react-router-dom";
import Calendar from "../../../utils/Calendar";
import * as S from "./CreateTaskModal.styled";
import { appRoutes } from "../../../appRoutes";
import { useState } from "react";
import { fetchAddTask } from "../../../API";
import { useUserContext } from "../../../contexts/usercontext";

export default function CreateTaskModal() {
  const {user} = useUserContext()
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
    date: "",
  });
  const [selectedDate, setSelectedDate] = useState();
  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...newTask,
      date: selectedDate,
    };
    await fetchAddTask({
      task: taskData,
      token: user.token,
    })
    console.log(taskData);
  };

  // const [checked, setChecked] = useState('');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setChecked(e.target.value);
    setNewTask({
      ...newTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  return (
    <>
      <S.PopNewCard id="popNewCard">
        <S.PopNewCardContainer>
          <S.PopNewCardBlock>
            <S.PopNewCardContent>
              <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
              <S.PopNewCardClose>
                <Link to={appRoutes.HOME}>X</Link>
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
                <S.RadioInput
                  type="radio"
                  id="radio1"
                  name="topic"
                  topic="Web Design"
                  value="Web Design"
                  onChange={handleInputChange}
                />
                <S.RadioLabel
                  htmlFor="radio1"
                  backgroundColor="#ffe4c2"
                  color="#ff6d00"
                
                >
                  Web Design
                </S.RadioLabel>

                <S.RadioInput
                  type="radio"
                  id="radio2"
                  name="topic"
                  value="Research"
                  onChange={handleInputChange}
                />
                <S.RadioLabel
                  htmlFor="radio2"
                  backgroundColor="#b4fdd1"
                  color="#06b16e"
                
                >
                  Research
                </S.RadioLabel>

                <S.RadioInput
                  type="radio"
                  id="radio3"
                  name="topic"
                  value="Copywriting"
                  onChange={handleInputChange}
                />
                <S.RadioLabel
                  htmlFor="radio3"
                  backgroundColor="#e9d4ff"
                  color="#9a48f1"
                >
                  Copywriting
                </S.RadioLabel>
              </S.CategoriesThemeBlock>

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
