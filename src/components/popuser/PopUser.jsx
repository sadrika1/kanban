import { useState } from "react";

export default function PopUser() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="header__user _hover02"
      >
        Ivan Ivanov
      </button>
      {isOpen && (
        <div
          className="header__pop-user-set pop-user-set"
          id="user-set-target"
        >
          <p className="pop-user-set__name">Ivan Ivanov</p>
          <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
          <div className="pop-user-set__theme">
            <p>Темная тема</p>
            <input type="checkbox" className="checkbox" name="checkbox" />
          </div>
          <button type="button" className="_hover03">
            <a href="#popExit">Выйти</a>
          </button>
        </div>
      )}
    </>
  );
}
