import PopUser from "../../popuser/PopUser";
import * as S from "./header.styled";
import { Container } from "../../../styled/common";
import { Link, Outlet } from "react-router-dom";
import { appRoutes } from "../../../appRoutes";

export default function Header() {
  return (
    <S.Header>
      <Outlet />
      {/* <CreateTaskModal addCard={addCard}></CreateTaskModal> */}
      <Container>
        <S.HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="/public/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="/public/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <S.CreateTaskBtn
             
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              <Link to={appRoutes.NEWTASK}>Создать новую задачу</Link>
            </S.CreateTaskBtn>
            <PopUser />
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}
