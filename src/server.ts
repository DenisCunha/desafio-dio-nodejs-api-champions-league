import express, {Request, Response} from "express";

const app = express();
const port = process.env.PORT;


app.get("/", (request: Request, response: Response) => {

console.log("Server Init");

});

app.listen(3000);