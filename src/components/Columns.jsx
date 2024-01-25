import TaskItem from "./TaskItem";

export default function Columns({props}) {
  return (
    <>
      <div class="main__column column">
        <div class="column__title">
          <p>{props}</p>
        </div>
        <div class="cards">
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </div>
      </div>
    </>
  );
}
