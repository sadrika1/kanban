import Calendar from "../../utils/Calendar";
import * as S from "./TaskBrowse.styled";
import {
  CategoriesName,
  CategoriesTheme,
  CategoriesTitle,
} from "../header/taskmodal/CreateTaskModal.styled";
import { Link, useParams } from "react-router-dom";
import { appRoutes } from "../../appRoutes";

export default function TaskBrowse({ topic }) {
  const { id } = useParams();

  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTop>
              <S.PopBrowseTitle>Название задачи: {id}</S.PopBrowseTitle>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{topic}</p>
              </div>
            </S.PopBrowseTop>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <S.PopBrowseWrap>
              <S.FormBrowse id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <label for="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readonly
                    placeholder="Введите описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.FormBrowse>

              <Calendar />
            </S.PopBrowseWrap>
            <CategoriesTitle>
              <>Категория</>
              <CategoriesTheme>
                <CategoriesName>Web Design</CategoriesName>
              </CategoriesTheme>
            </CategoriesTitle>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  Удалить задачу
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to={appRoutes.HOME}>Закрыть</Link>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  Сохранить
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  Отменить
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  Удалить задачу
                </button>
              </div>
              <span className="btn-edit__close _btn-bg _hover01">
                <Link to={appRoutes.HOME}>Закрыть</Link>
              </span>
            </div>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
