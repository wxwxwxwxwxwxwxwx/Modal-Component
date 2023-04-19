import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { ModalProps } from "./Modal.props";

import "./Modal.scss";

const Modal = ({ title, description }: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(5);
  const [timerActivate, setTimerActivate] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout>>();

  const onToggleOpen = (): void => {
    setIsOpen((isOpen) => !isOpen);
    setTimerActivate(false);

    clearTimeout(timerId);

    if (!isOpen && !timerActivate) {
      setTimer(5);
    }
  };

  useEffect(() => {
    if (isOpen && timer && timerActivate) {
      setTimerId(
        setTimeout(() => {
          setTimer(() => timer - 1);
        }, 1000)
      );
    } else {
      setTimerActivate(false);
    }
  }, [timer, timerActivate]);

  return (
    <div className="modal">
      <div className="modal__wrapper">
        {isOpen && (
          <div className="modal__item">
            <span onClick={onToggleOpen}>&#10006;</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="modal__btns">
              <Button disabled={timerActivate ? true : false}>
                Подтвердить {timer ? `(${timer})` : null}
              </Button>
              <Button onClick={onToggleOpen}>Отмена</Button>
            </div>
          </div>
        )}
        <Button
          onClick={() => {
            onToggleOpen();
            setTimerActivate(!timerActivate);
          }}
          className="modal__button"
        >
          Выполнить действие
        </Button>
      </div>
    </div>
  );
};

export default Modal;
