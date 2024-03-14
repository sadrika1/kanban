import styled from "styled-components";
import { Hovers } from "../../../styled/hover";
import { topicStyles } from "../../../styled/topic";

export const PopNewCard = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 730px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const CardFormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardFromNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
  }
`;

export const CardFromNewArea = styled(CardFromNewInput)`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  line-height: 1px;
`;

export const LabelFormSubtitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;
export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
`;
export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;
export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled(NavActions)`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

export const CreateNewCardButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  ${Hovers.hover03}
`;

export const PopNewCardClose = styled.span`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  height: 20px;
  width: 20px;
  background-color: transparent;
`;

export const CategoriesTitle = styled.div`
  margin-bottom: 14px;
`;

// checkboxs

export const CategoriesThemeBlock = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
`;

export const RadioInput = styled.input`
  display: block;
`;

export const RadioLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  height: 30px;
  border-radius: 24px;
  padding: 8px 20px;
  background-color: ${({ $color }) =>
    topicStyles[$color]?.backgroundColor || "#FFF"};
  color: ${({ $color }) => topicStyles[$color]?.color || "#000"};

  opacity: 0.4;

  ${RadioInput}:checked+& {
    opacity: 1;
  }
`;
