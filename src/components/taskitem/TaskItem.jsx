import CalendarSVG from "../../utils/svg/CalendarSVG";
import * as S from './taskitem.styled'

export default function TaskItem() {
  return (
    <S.CardsItem>
      <S.CardsCard>
        <S.CardGroup>
          <div className="card__theme  _orange">
            <p className="_orange">Web Design</p>
          </div>
          <a href="#popBrowse" target="_self">
            <div className="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </S.CardGroup>
        <div className="card__content">
          <a href="" target="_blank">
            <h3 className="card__title">Название задачи</h3>
          </a>
          <div className="card__date">
            <CalendarSVG />
            <p>30.10.23</p>
          </div>
        </div>
      </S.CardsCard>
    </S.CardsItem>
  );
}
