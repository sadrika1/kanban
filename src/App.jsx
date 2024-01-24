import "./App.css";
import Header from "./components/header/Header";
import Columns from "./components/Column";
import TaskBrowse from "./components/TaskBrowse";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main class="main">
        <div class="container">
          <div class="main__block">
            <div class="main__content">
              <Columns />
              <TaskBrowse />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
