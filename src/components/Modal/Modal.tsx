import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { ModalProps } from "./Modal.props";

import "./Modal.scss";

const Modal = ({ title, description }: ModalProps) => {
  // отображается ли сейчас модальное окно
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // подтвердил ли пользователь особые условия
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  // кол-во секунд в таймере обратного отсчета
  const [timer, setTimer] = useState<number>(5);
  // активен ли сейчас таймер
  const [timerActivate, setTimerActivate] = useState<boolean>(false);
  // timerId для остановки через clearInterval. мне кажется, что можно обойтись без него, потому что если условие не выполняется, то и таймер запущен не будет. если не использовать timerId, то можно сократить количество re-renderов, что позволит сэкономить память
  const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout>>();

  // в зависимости от состояния открывает / закрывает модальное окно
  const onToggleModal = () => {
    if (!isConfirmed) {
      setIsOpen((isOpen) => !isOpen);
      setTimerActivate(true);
    } else {
      alert("Действие уже выполнено");
    }
    if (!isOpen && !timerActivate && !isConfirmed) {
      setTimer(5);
    }
  };

  // если пользователь нажал на кнопку "Подтвердить"
  const onConfirmedTerms = (): void => {
    if (isOpen && !timerActivate) {
      setIsOpen((isOpen) => !isOpen);
      setIsConfirmed(true);
      alert("Действие выполнено");
    }
  };

  // логика по работе таймера
  useEffect(() => {
    if (isOpen && timer && timerActivate) {
      setTimerId(
        setTimeout(() => {
          setTimer(() => timer - 1);
        }, 1000)
      );
    } else {
      setTimerActivate(false);
      clearTimeout(timerId);
    }
  }, [isOpen, timer, timerActivate]);

  return (
    <div className="modal">
      <div className="modal__wrapper">
        {isOpen && (
          <div className="modal__item">
            <span onClick={onToggleModal}>&#10006;</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="modal__btns">
              <Button
                onClick={onConfirmedTerms}
                disabled={timerActivate ? true : false}
              >
                Подтвердить {timer ? `(${timer})` : null}
              </Button>
              <Button onClick={onToggleModal}>Отмена</Button>
            </div>
          </div>
        )}
        <Button onClick={onToggleModal} className="modal__button">
          Выполнить действие
        </Button>
      </div>
    </div>
  );
};

export default Modal;
