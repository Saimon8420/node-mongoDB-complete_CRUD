require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const userRouter = require("./routes/userRoute");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRouter);

app.get("/", (req, res) => {
    res.send("node server with mongodb");
})
app.listen(port, () => {
    console.log(`Listening to the port ${port} at http://localhost:${port}`)
})