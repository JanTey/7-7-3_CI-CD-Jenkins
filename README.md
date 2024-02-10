

Любые вопросы по решению задач задавайте в чате учебной группы.

Не забывайте про важные моменты, без которых работы не будут приниматься на проверку: 
- корректное оформление репозиториев;
- использование .gitignore;
- форматирование кода.

---

  ## Задача 1. Cypress. Параллельный запуск тестов

  1. Подключите к Dashboard ваш репозиторий на GitHub с проектом тестирования бронирования сеансов кино из предыдущего домашнего задания. 
  2. Организуйте параллельный запуск тестов для spec-теста.
  3. Запушьте изменения и запустите тесты через Dashboard.
  4. Убедитесь, что тесты запустились параллельно, и результаты видны на Dashboard.
  

  ## Задача 2. Подключение Jenkins 
  
  Реализуйте запуск ваших тестов в Jenkins локально:
  
  1. Добавьте скрипты и параметры для запуска тестов в трёх разных браузерах.
  2. Добавьте скрипт и параметр для запуска тестов параллельно, чтобы два разных потока запускались в двух разных браузерах.
  3. Поместите два spec-теста в разные папки.
  4. Добавьте ещё по одному spec-тесту с новыми тестами в каждую папку. Тесты выберите сами по приоритетности.
  5. Добавьте скрипт, который будет запускать тесты в этих двух папках параллельно в двух потоках. Всё из папки 1 — первый поток; всё из папки 2 — второй поток.
  6. Добавьте новый параметр для запуска тестов из п. 5 в Jenkins.
  7. Убедитесь, что тесты запускаются параллельно, соответственно каждой папке.
  8. Проверьте, что предыдущие параметры запуска по-прежнему работают. Если необходимо, сделайте рефакторинг.
  9. Сдайте ссылки на репозиторий и Dashboard на проверку.