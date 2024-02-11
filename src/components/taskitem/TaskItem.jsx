import CalendarSVG from "../../utils/svg/CalendarSVG";

export default function TaskItem() {
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          {/* <div classNameName={`card__theme ${styles[themeclassName]}`}>
            <p classNameName={props.textclassName}>{props.taskName}</p>
          </div> */}
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
        </div>
        <div className="card__content">
          <a href="" target="_blank">
            <h3 className="card__title">Название задачи</h3>
          </a>
          <div className="card__date">
            <CalendarSVG />
            <p>30.10.23</p>
          </div>
        </div>
      </div>
    </div>
  );
}
