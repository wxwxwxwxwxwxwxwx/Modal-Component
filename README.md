# Modal Component
## ТЗ
Необходимо разработать модальное окно с подтверждением соглашения об использовании функционала платформы.
1. Пользователь нажимает на странице на кнопку «Выполнить действие».
2. Открывается модальное окно с текстом подтверждения действий:
  2.1 Должен быть заголовок: «Согласие с правилами»;
  2.2 Должен быть крестик в правом верхнем углу;
  2.3 Текст в основной части окна: «Для данной функции применяются особые условия и правила пользования, их необходимо подтвердить, нажав на кнопку Подтвердить»;
3. Внизу окна две кнопки — «Отмена» и «Подтвердить».
4. Кнопка «Подтвердить» заблокирована на первые 5 сек просмотра модального окна.
5. При повторном открытии модального окна, счетчик должен начинаться с 5 сек.
6. Текст кнопки должен отображать ход оставшегося времени (Например, «Подтвердить (5)» … «Подтвердить (1)», «Подтвердить»).
7. После подтверждения окно должно быть закрыто и необходимо показать сообщение на экране «Действие выполнено» (Например, с помощью alert).
8. Повторное нажатие кнопки «Выполнить действие» не должно открывать диалог, если пользователь нажал на кнопку «Подтвердить», и сразу выполнять действие (показ сообщения «Действие выполнено»).
