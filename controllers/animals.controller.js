const { cattle } = require('../models/animals.model');

function ctrlPostAnimal(req, res) {
    if (!req.body.animal) {
        console.log('error: invalid POST!!')
        return res.status(400).json({
            error: 'missing animal description'
        });
    }

    const newAnimal = {
        id: cattle.length,
        animal: req.body.animal
    }

    cattle.push(newAnimal);

    res.json(newAnimal);
}

function ctrlGetAnimals(req, res) {
    res.json(cattle);
}

function ctrlRenderAnimals(req, res) {
    const list = cattle.map(x => {
        return `<li>${x.id}. ${x.animal}</li>`;
    }).join("");

    //console.log(list);
    res.render('animals', { animalList: list });
}

function ctrlGetAnimalId(req, res) {
    const id = Number(req.params.animalId);

    if (!cattle[id]) {
        res.status(404).send(`<h1>Cattle Id '${id}' not found!</h1>`);
    }

    res.status(200).send(cattle[id]);
}

module.exports = { ctrlPostAnimal, ctrlGetAnimals, ctrlGetAnimalId, ctrlRenderAnimals };