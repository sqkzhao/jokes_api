// import mongoose
const mongoose = require('mongoose')

// connect to MongoDB with Mongoose
mongoose.connect('mongodb://localhost/jokes_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Sth went wrong when connecting to the database', err))

