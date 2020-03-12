// import model
const Joke = require('../models/jokes.model')

// export function to get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'error: findAllJokes', error: err }))
}

module.exports.findJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(joke => res.json({ joke: joke }))
        .catch(err => res.json({ message: 'error: findJoke', error: err }))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: 'error: createJoke', error: err }))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, { new: true })   // new:true - return document after update was applied
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'error: updateJoke', error: err }))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'error: deleteJoke', error: err }))
}