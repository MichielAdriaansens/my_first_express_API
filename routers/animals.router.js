const express = require('express');
const { ctrlPostAnimal, ctrlGetAnimals, ctrlGetAnimalId, ctrlRenderAnimals } = require('../controllers/animals.controller');

const animalsRouter = express.Router();

animalsRouter.use((req, use, next) => {
    console.log('ip address: ', req.ip);
    next();
});

animalsRouter.post('/', ctrlPostAnimal);

animalsRouter.get('/json', ctrlGetAnimals);

animalsRouter.get('/:animalId', ctrlGetAnimalId);

animalsRouter.get('/', ctrlRenderAnimals);

module.exports = animalsRouter;
