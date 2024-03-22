import styled from "styled-components";
import { Hovers } from "../../styled/hover";

export const WrapperLogin = styled.div`
  width: 100%;
  max-height: 100%;
  background-color: #eaeef6;
`;

export const ContainerLogin = styled.div`
  display: block;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBlock = styled.div`
  display: block;
  background-color: #ffffff;
  max-width: 368px;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const ModalTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
`;

export const FormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & input {
    min-width: 248px;
    border-radius: 8px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    outline: none;
    padding: 10px 8px 10px 10px;
    margin-bottom: 10px;

    &::placeholder {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.28px;
      color: #94a6be;
    }
  }
`;

export const LoginButton = styled.button`
  min-width: 248px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  ${Hovers.hover01}
`;

export const RegisterRedirect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
  & a {
    color: rgba(148, 166, 190, 0.4);
    text-decoration: underline;
  }
`;

export const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;

  
`;