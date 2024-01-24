import Calendar from "../../utils/Calendar";

export default function CreateTaskModal() {
  return (
    <div className="pop-new-card" id="popNewCard">
      <div class="pop-new-card__container">
        <div class="pop-new-card__block">
          <div class="pop-new-card__content">
            <h3 class="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" class="pop-new-card__close">
              &#10006;
            </a>
            <div class="pop-new-card__wrap">
              <form
                class="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div class="form-new__block">
                  <label for="formTitle" class="subttl">
                    Название задачи
                  </label>
                  <input
                    class="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autofocus
                  />
                </div>
                <div class="form-new__block">
                  <label for="textArea" class="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    class="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <div class="pop-new-card__calendar calendar">
                <p class="calendar__ttl subttl">Даты</p>
                <div class="calendar__block">
                  <div class="calendar__nav">
                    <div class="calendar__month">Сентябрь 2023</div>
                    <div class="nav__actions">
                      <div class="nav__action" data-action="prev">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="11"
                          viewBox="0 0 6 11"
                        >
                          <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                        </svg>
                      </div>
                      <div class="nav__action" data-action="next">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="11"
                          viewBox="0 0 6 11"
                        >
                          <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Calendar />

                  <input type="hidden" id="datepick_value" value="08.09.2023" />
                  <div class="calendar__period">
                    <p class="calendar__p date-end">
                      Выберите срок исполнения{" "}
                      <span class="date-control"></span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="pop-new-card__categories categories">
              <p class="categories__p subttl">Категория</p>
              <div class="categories__themes">
                <div class="categories__theme _orange _active-category">
                  <p class="_orange">Web Design</p>
                </div>
                <div class="categories__theme _green">
                  <p class="_green">Research</p>
                </div>
                <div class="categories__theme _purple">
                  <p class="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button class="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
