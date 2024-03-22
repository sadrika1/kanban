import { TopicTitleColor, topicStyles } from "../../styled/topic";
import CalendarSVG from "../../utils/svg/CalendarSVG";
import * as S from "./taskitem.styled";
import { Link } from "react-router-dom";
import { format } from "date-fns";

export default function TaskItem({ theme, title, date, id }) {
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
          <Link to={`task/${id}`}>
            <S.CardTitle>{title}</S.CardTitle>
          </Link>
          <S.CardDateBlock>
            <CalendarSVG />
            <S.CardDateText>{format(date, "dd.MM.yy")}</S.CardDateText>
          </S.CardDateBlock>
        </S.CardContent>
      </S.CardsCard>
    </S.CardsItem>
  );
}
