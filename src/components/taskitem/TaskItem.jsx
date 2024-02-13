import { useState } from "react";
import { TopicTitleColor, topicStyles } from "../../styled/topic";
import CalendarSVG from "../../utils/svg/CalendarSVG";
import * as S from "./taskitem.styled";

export default function TaskItem({
  theme,
  title,
  date,
  setIsOpenEditTaskModal,
}) {
  // const handleOpeneEditModal = () => {
  //   setIsOpenEditTaskModal(true);
  // };

  // const handleCloseEditModal = () => {
  //   setIsOpenEditTaskModal(false);
  // };
  return (
    <S.CardsItem>
      <S.CardsCard>
        <S.CardGroup>
          <S.CardTheme $topicColor={TopicTitleColor[theme]}>
            <S.TopicText>{theme}</S.TopicText>
          </S.CardTheme>
          <S.EditCardButton onClick={() => setIsOpenEditTaskModal(true)}>
            <S.CircleBtn />
            <S.CircleBtn />
            <S.CircleBtn />
          </S.EditCardButton>
        </S.CardGroup>
        <S.CardContent>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardDateBlock>
            <CalendarSVG />
            <S.CardDateText>{date}</S.CardDateText>
          </S.CardDateBlock>
        </S.CardContent>
      </S.CardsCard>
    </S.CardsItem>
  );
}
