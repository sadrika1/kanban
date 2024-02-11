import TaskItem from "../taskitem/TaskItem";

export default function Columns({ title, cardList }) {
  return (
    <>
      <div class="main__column column">
        <div class="column__title">
          <p>{title}</p>
        </div>
        <div class="cards">
          {cardList.map((card) => (
            <TaskItem 
            theme={card.theme} 
            title={card.title} 
            key={card.id} />
          ))}
        </div>
      </div>
    </>
  );
}
