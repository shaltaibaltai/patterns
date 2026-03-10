# Паттерн Абстрактная Фабрика
На примере формы логина:

Сама форма не знает что в ней должно быть, она вызывает абстрактную фабрику LoginFactory, с методами `createFields` и `createSubmitHandlers`.

### Запуск
```
npm install
npm run dev
```

Открываем: [http://localhost:5173/](http://localhost:5173/)