import "./App.css";
import Header from "./components/header/headercomponent/Header";
import Columns from "./components/columns/Columns";
import TaskBrowse from "./components/taskbrowse/TaskBrowse";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main class="main">
        <div class="container">
          <div class="main__block">
            <div class="main__content">
              <Columns props={"Без статуса"}/>
              <Columns props={"Нужно сделать"}/>
              <Columns props={"В работе"}/>
              <Columns props={"Тестирование"}/>
              <Columns props={"Готово"}/>
              <TaskBrowse />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
