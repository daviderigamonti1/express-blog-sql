import express from 'express'; //creo un'istanza di express
import 'dotenv/config' // Abilitiamo i file .env di configurazione
const app = express(); //creo un'istanza del server
const port = process.env.PORT || 3000; // set costant to port

//Other imports
import errorsHandler from "./middlewares/errorsHandles.js";
import notFound from "./middlewares/notFound.js";
import corsPolicy from "./middlewares/corsPolicy.js";
import exampleRouter from "./routers/examples.js";

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