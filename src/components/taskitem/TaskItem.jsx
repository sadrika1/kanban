import { useState } from "react";
import { TopicTitleColor, topicStyles } from "../../styled/topic";
import CalendarSVG from "../../utils/svg/CalendarSVG";
import * as S from "./taskitem.styled";
import { Link } from "react-router-dom";

export default function TaskItem({
  theme,
  title,
  date,
  id
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
          <S.EditCardButton>
            <S.CircleBtn />
            <S.CircleBtn />
            <S.CircleBtn />
          </S.EditCardButton>
        </S.CardGroup>
        <S.CardContent>
          <Link to={`task/${id}`}><S.CardTitle>{title}</S.CardTitle></Link>
          <S.CardDateBlock>
            <CalendarSVG />
            <S.CardDateText>{date}</S.CardDateText>
          </S.CardDateBlock>
        </S.CardContent>
      </S.CardsCard>
    </S.CardsItem>
  );
}
