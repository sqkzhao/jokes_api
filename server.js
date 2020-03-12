const express = require("express");
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllJokesRoutes = require("./server/routes/jokes.routes");
AllJokesRoutes(app);

app.listen(5000, () => console.log("The server is all fired up on port 5000"));