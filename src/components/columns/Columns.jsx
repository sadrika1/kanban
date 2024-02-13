import TaskItem from "../taskitem/TaskItem";
import * as S from "./Columns.styled";

export default function Columns({ title, cardList, setIsOpenEditTaskModal }) {
  return (
    <>
      <S.MainColumn>
        <S.ColumnTitle>{title}</S.ColumnTitle>
        <S.CardsBlock>
          {cardList.map((card) => (
            <TaskItem 
            theme={card.theme} 
            title={card.title} 
            date={card.date}
            key={card.id}
            setIsOpenEditTaskModal={setIsOpenEditTaskModal}
             />
          ))}
        </S.CardsBlock>
      </S.MainColumn>
    </>
  );
}
