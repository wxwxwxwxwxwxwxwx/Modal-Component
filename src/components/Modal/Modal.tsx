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
  // timerId у таймера для остановки через clearInterval
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout>>();

  // в зависимости от состояния открывает / закрывает модальное окно
  const onToggleModal = (): void => {
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
      setTimeoutId(setTimeout(() => alert("Действие выполнено"), 4));
    }
  };

  // логика по работе таймера
  useEffect(() => {
    if (isOpen && timer && timerActivate) {
      setTimeoutId(
        setTimeout(() => {
          setTimer(() => timer - 1);
        }, 1000)
      );
    } else {
      setTimerActivate(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen, timer, timerActivate]);

  return (
    <div className="modal">
      <div className="modal__wrapper">
        {isOpen && (
          <div className="modal__item">
            <span className="modal__close" onClick={onToggleModal}>
              &#10006;
            </span>
            <h2 className="modal__title">{title}</h2>
            <p className="modal__descr">{description}</p>
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
        <Button onClick={onToggleModal}>Выполнить действие</Button>
      </div>
    </div>
  );
};

export default Modal;
