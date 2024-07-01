import express, {Request, Response, json} from "express";

function createApp() {
const app = express();
app.use(json());
app.get("/", (request: Request, response: Response) => {
    response.status(200).json({player : "Leonel Messi"});
});

return app;
}

export default createApp;
