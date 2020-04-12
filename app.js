const express = require('express');
const path = require('path');

const { PORT = 3000 } = process.env;
const app = express();

const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', cardsRouter);
app.use('/', usersRouter);

app.use('/', (req, res) => {
  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});
