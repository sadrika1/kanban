// todo: 1 изменяемый компонент на все задачи

import CalendarSVG from "../utils/svg/CalendarSVG";

export default function TaskItem() {
  return (
    <div class="cards__item">
      <div class="cards__card card">
        <div class="card__group">
          {/* <div className={`card__theme ${styles[themeClass]}`}>
            <p className={props.textClass}>{props.taskName}</p>
          </div> */}
          <div class="card__theme  _orange">
            <p class="_orange">Web Design</p>
          </div>
          <a href="#popBrowse" target="_self">
            <div class="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>
        <div class="card__content">
          <a href="" target="_blank">
            <h3 class="card__title">Название задачи</h3>
          </a>
          <div class="card__date">
          <CalendarSVG />
            <p>30.10.23</p>
          </div>
        </div>
      </div>
    </div>
  );
}
