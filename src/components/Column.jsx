import CalendarSVG from "../utils/svg/CalendarSVG";
import TaskItem from "./TaskItem";

export default function Columns() {
  return (
    <>
      <div class="main__column column">
        <div class="column__title">
          <p>Без статуса</p>
        </div>
        <div class="cards">
          <TaskItem />
          <div class="cards__item">
            <div class="cards__card card">
              <div class="card__group">
                <div class="card__theme _green">
                  <p class="_green">Research</p>
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

          <TaskItem />

          <div class="cards__item">
            <div class="cards__card card">
              <div class="card__group">
                <div class="card__theme _purple">
                  <p class="_purple">Copywriting</p>
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

          <TaskItem />
        </div>
      </div>

      <div class="main__column">
        <div class="column__title">
          <p>Нужно сделать</p>
        </div>
        <div class="cards">
          <div class="cards__item">
            <div class="cards__card card">
              <div class="card__group">
                <div class="card__theme _green">
                  <p class="_green">Research</p>
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
        </div>
      </div>
      <div class="main__column">
        <div class="column__title">
          <p>В работе</p>
        </div>
        <div class="cards">
          <div class="cards__item">
            <div class="cards__card card">
              <div class="card__group">
                <div class="card__theme _green">
                  <p class="_green">Research</p>
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

          <div class="cards__item">
            <div class="cards__card card">
              <div class="card__group">
                <div class="card__theme _purple">
                  <p class="_purple">Copywriting</p>
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

          <TaskItem />
        </div>
      </div>
      <div class="main__column">
        <div class="column__title">
          <p>Тестирование</p>
        </div>
        <div class="cards">
          <div class="cards__item">
            <div class="cards__card card">
              <div class="card__group">
                <div class="card__theme _green">
                  <p class="_green">Research</p>
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
        </div>
      </div>
      <div class="main__column">
        <div class="column__title">
          <p>Готово</p>
        </div>
        <div class="cards">
          <div class="cards__item">
            <div class="cards__card card">
              <div class="card__group">
                <div class="card__theme _green">
                  <p class="_green">Research</p>
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
        </div>
      </div>
    </>
  );
}
