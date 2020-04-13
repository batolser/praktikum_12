const path = require('path');
const cardsRouter = require('express').Router(); // создали роутер

const fsPromises = require('fs').promises;

const cardway = path.join(__dirname, '../data/cards.json');

cardsRouter.get('/cards', (req, res) => {
  fsPromises.readFile(cardway, { encoding: 'utf8' })
    .then((data) => {
      res.send(JSON.parse(data));
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
});

module.exports = cardsRouter; // экспортировали роутер