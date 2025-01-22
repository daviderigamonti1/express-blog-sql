const express = require("express"); //creo un'istanza di express
const app = express(); //creo un'istanza del server
const port = process.env.PORT || 3000; // set costant to port

//Other imports
const errorsHandler = require("./middlewares/errorsHandles");
const notFound = require("./middlewares/notFound");
const corsPolicy = require("./middlewares/corsPolicy");
const exampleRouter = require("./routers/examples");

app.use(express.static("public"));

app.use(corsPolicy);

//registro il body-parser per "application/json"
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home Page");
});

//other routes
app.use("/posts", exampleRouter);

app.use(errorsHandler);

app.use(notFound);

//server must listen on your host and you port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})