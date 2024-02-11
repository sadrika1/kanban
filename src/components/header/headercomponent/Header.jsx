import CreateTaskModal from "../taskmodal/CreateTaskModal";
import Logout from "../logout/Logout";
import PopUser from "../../popuser/PopUser";

export default function Header({ addCard }) {
  return (
    <header class="header">
      <CreateTaskModal />
      <Logout />

      <div class="container">
        <div class="header__block">
          <div class="header__logo _show _light">
            <a href="" target="_self">
              <img src="/public/logo.png" alt="logo" />
            </a>
          </div>
          <div class="header__logo _dark">
            <a href="" target="_self">
              <img src="/public/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav class="header__nav">
            <button
              onClick={addCard}
              class="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              Создать новую задачу
            </button>
            <PopUser />
          </nav>
        </div>
      </div>
    </header>
  );
}
