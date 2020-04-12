const path = require('path');
const cardsRouter = require('express').Router(); // создали роутер

const fsPromises = require('fs').promises;

const cardway = path.join(__dirname, '../data/cards.json');
module.exports = cardsRouter; // экспортировали роутер

cardsRouter.get('/cards', (req, res) => {
  fsPromises.readFile(cardway, { encoding: 'utf8' })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
});
