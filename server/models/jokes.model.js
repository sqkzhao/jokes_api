const mongoose = require('mongoose')

// const JokeSchema = new mongoose.Schema({
//     setup: {
//         type: String,
//         required: [true, "Setup is required"],
//         minlength: [10, "Setup must be at least 10 characters long"]
//     },
//     punchline: {
//         type: String,
//         required: [true, "punchline is required"],
//         minlength: [3, "punchline must be at least 3 characters long"]
//     }
// })

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
})

const Joke = mongoose.model('Joke', JokeSchema)

module.exports = Joke