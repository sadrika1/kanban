import TaskItem from "../taskitem/TaskItem";
import * as S from "./Columns.styled";

export default function Columns({ title, cardList }) {
  return (
    <>
      <S.MainColumn>
        <S.ColumnTitle>{title}</S.ColumnTitle>
        <S.CardsBlock>
          {cardList.map((card) => (
            <TaskItem theme={card.theme} title={card.title} key={card.id} />
          ))}
        </S.CardsBlock>
      </S.MainColumn>
    </>
  );
}
