import express, {Request, Response, json} from "express";

const app = express();
const port = process.env.PORT;

app.use(json());

app.get("/", (request: Request, response: Response) => {

response.status(200).json({player : "Leonel Messi"});

});

app.listen(port, ()=> {
    console.log(`Server running at port http://localhost:${port}`);
});