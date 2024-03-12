import Calendar from "../../utils/Calendar";
import * as S from "./TaskBrowse.styled";
import { Link, useParams } from "react-router-dom";
import { appRoutes } from "../../appRoutes";

export default function TaskBrowse() {
  const { id } = useParams();

  // useEffect(() => {
  //   fetch(`https://wedev-api.sky.pro/api/kanban/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setSelectTask(data));
  // }, [id]);

  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTop>
              <S.PopBrowseTitle>Название задачи: {id}</S.PopBrowseTitle>
              <div className="categories__theme theme-top _orange _active-category">
                <p>Текущий топик сюда</p>
              </div>
            </S.PopBrowseTop>
            <S.StatuseTitle>Статус</S.StatuseTitle>
            <S.StatusThemesBlock>
              <S.ActiveStatus>Без статуса</S.ActiveStatus>
            </S.StatusThemesBlock>

            <S.PopBrowseWrap>
              <S.FormBrowse id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  Описание задачи
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Подробное описание задачи"
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.FormBrowse>

              <Calendar />
            </S.PopBrowseWrap>
            <S.PopBrowseButtons>
              <div>
                <Link to={`/task/${id}/edit`}>
                  <S.BtnBrowseBor>Редактировать задачу</S.BtnBrowseBor>
                </Link>
                <S.BtnBrowseBor>Удалить задачу</S.BtnBrowseBor>
              </div>
              <Link to={appRoutes.HOME}>
                <S.BtnBrowseBg>Закрыть</S.BtnBrowseBg>
              </Link>
            </S.PopBrowseButtons>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
