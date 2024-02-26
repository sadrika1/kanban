import { Link } from "react-router-dom";
import Calendar from "../../../utils/Calendar";
import * as S from "./CreateTaskModal.styled";
import { appRoutes } from "../../../appRoutes";
import { TopicTitleColor } from "../../../styled/topic";

export default function CreateTaskModal({ addCard, theme }) {
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
                      name="name"
                      id="formTitle"
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
                      name="text"
                      id="textArea"
                      placeholder="Введите описание задачи..."
                    ></S.CardFromNewArea>
                  </S.CardFormNewBlock>
                </S.PopNewCardForm>
                <S.Calendar>
                  <S.CalendarTitle>Даты</S.CalendarTitle>
                  <div className="calendar__block">
   
                    <Calendar />

                    <input
                      type="hidden"
                      id="datepick_value"
                      value="08.09.2023"
                    />
                    <div className="calendar__period">
                      <p className="calendar__p date-end">
                  
                        <span className="date-control"></span>
                      </p>
                    </div>
                  </div>
                </S.Calendar>
              </S.PopNewCardWrap>
              <div>
                <S.CategoriesTitle>Категория</S.CategoriesTitle>
                <S.CategoriesThemeBlock>
                  <S.CategoriesTheme>
                    <S.CategoriesName className="_orange">
                      Web Design
                    </S.CategoriesName>
                  </S.CategoriesTheme>
                  <S.CategoriesTheme>
                    <S.CategoriesName className="_green">
                      Research
                    </S.CategoriesName>
                  </S.CategoriesTheme>
                  <S.CategoriesTheme>
                    <S.CategoriesName className="_purple">
                      Copywriting
                    </S.CategoriesName>
                  </S.CategoriesTheme>
                </S.CategoriesThemeBlock>
              </div>
              <S.CreateNewCardButton
                onClick={addCard}
                className="_hover01"
                id="btnCreate"
              >
                Создать задачу
              </S.CreateNewCardButton>
            </S.PopNewCardContent>
          </S.PopNewCardBlock>
        </S.PopNewCardContainer>
      </S.PopNewCard>
    </>
  );
}
