import { useState } from "react";

import "./Modal.css";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__item"></div>
      <button className="modal__button">Выполнить действие</button>
    </div>
  );
};

export default Modal;
