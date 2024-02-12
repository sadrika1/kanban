import CreateTaskModal from "../taskmodal/CreateTaskModal";
import Logout from "../logout/Logout";
import PopUser from "../../popuser/PopUser";
import * as S from "./header.styled";
import { Container } from "../../../styled/common";
import { useState } from "react";

export default function Header({ addCard }) {
  const [isOpenNewTaskModal, setIsOpenNewTaskModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenNewTaskModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenNewTaskModal(false);
  };

  return (
    <S.Header>
      <Logout />
      <CreateTaskModal
        isOpenNewTaskModal={isOpenNewTaskModal}
        setIsOpenNewTaskModal={setIsOpenNewTaskModal}
        addCard={addCard}
        handleCloseModal={handleCloseModal}
      />
      <Container>
        <S.HeaderBlock>
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
          <S.HeaderNav>
            <S.CreateTaskBtn
              onClick={handleOpenModal}
              class="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              Создать новую задачу
            </S.CreateTaskBtn>
            <PopUser />
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}
