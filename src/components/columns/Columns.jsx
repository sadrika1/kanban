import TaskItem from "../taskitem/TaskItem";
import * as S from "./Columns.styled";

export default function Columns({ title, cardList}) {
  return (
    <>
      <S.MainColumn>
        <S.ColumnTitle>{title}</S.ColumnTitle>
        <S.CardsBlock>
          {cardList.map((task) => (
            <TaskItem 
            theme={task.topic} 
            title={task.title} 
            date={task.date}
            key={task._id}
            id={task._id}
             />
          ))}
        </S.CardsBlock>
      </S.MainColumn>
    </>
  );
}
