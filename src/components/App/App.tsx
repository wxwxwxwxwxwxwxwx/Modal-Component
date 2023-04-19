import Modal from "../Modal/Modal";
import "./App.scss";

function App() {
  return (
    <Modal
      title="Согласие с правилами"
      description="Для данной функции применяются особые условия и правила
              пользования, их необходимо подтвердить, нажав на кнопку
              «Подтвердить»"
    />
  );
}

export default App;
