import { Link } from "react-router-dom";
import styled from "styled-components";
import { Hovers } from "../../styled/hover";

export default function NotFoundPage() {
  return (
    <NotFoundBlock>
      <NotFoundImg src="../../public/404Error.svg" alt="" />
      <h3>Ой! Страница потерялась</h3>
      <NotFoundButton>
        <Link to="/">Вернуться на главную</Link>
      </NotFoundButton>
    </NotFoundBlock>
  );
}

const NotFoundBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotFoundImg = styled.img`
  width: 500px;
  height: 500px;
`;

const NotFoundButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  &:hover {
    ${Hovers.hover03}
  }

  & a {
    color: white;
    text-decoration: none;
  }
`;
