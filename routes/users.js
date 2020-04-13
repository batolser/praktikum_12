const path = require('path');
const usersRouter = require('express').Router(); // создали роутер

const fsPromises = require('fs').promises;

const cardway = path.join(__dirname, '../data/users.json');

usersRouter.get('/users/:id', (req, res) => {
  fsPromises.readFile(cardway, { encoding: 'utf8' })
    .then((data) => {
      const user = JSON.parse(data).find((item) => item._id === req.params.id);
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      } else {
        res.send(user);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
});


usersRouter.get('/users', (req, res) => {
  fsPromises.readFile(cardway, { encoding: 'utf8' })
    .then((data) => {
      res.send(JSON.parse(data));
    })

    .catch((err) => {
      res.status(500).send({ message: err });
    });
});

module.exports = usersRouter; // экспортировали роутер
