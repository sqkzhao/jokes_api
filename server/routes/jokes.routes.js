const JokesController = require('../controllers/jokes.controller')

module.exports = app => {
    app.get("/api/jokes", JokesController.findAllJokes)
    app.get("/api/jokes/:_id", JokesController.findJoke)
    app.post("/api/jokes/new", JokesController.createJoke)
    app.put("/api/jokes/update/:_id", JokesController.updateJoke)
    app.delete("/api/jokes/delete/:_id", JokesController.deleteJoke)
}