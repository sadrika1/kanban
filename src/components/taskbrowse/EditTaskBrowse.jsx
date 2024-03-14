import Calendar from "../../utils/Calendar";
import * as S from "./TaskBrowse.styled";
import { Link, useParams } from "react-router-dom";
import { appRoutes } from "../../appRoutes";
import { useEffect, useState } from "react";

export default function EditTaskBrowse() {
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
                <p>Текущий топик</p>
              </div>
            </S.PopBrowseTop>
            <S.PopBrowseStatus>
              <S.StatuseTitle>Статус</S.StatuseTitle>
              <S.StatusThemesBlock>
                <S.ThemeStatus>Без статуса</S.ThemeStatus>
                <S.ThemeStatus>Нужно сделать</S.ThemeStatus>
                <S.ThemeStatus>В работе</S.ThemeStatus>
                <S.ThemeStatus>Тестирование</S.ThemeStatus>
                <S.ThemeStatus>Готово</S.ThemeStatus>
              </S.StatusThemesBlock>
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.FormBrowse id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <label htmlFor="textArea01">Описание задачи</label>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    placeholder="Введите описание задачи"
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.FormBrowse>

              <Calendar />
            </S.PopBrowseWrap>

            <S.PopBrowseButtons>
              <div>
                <S.BtnBrowseBg>Сохранить</S.BtnBrowseBg>
                {/* <S.BtnBrowseBor>
                  Отменить
                  </S.BtnBrowseBor> */}
                <S.BtnBrowseBor id="btnDelete">Удалить задачу</S.BtnBrowseBor>
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
