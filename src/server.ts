import createApp from "./app";

const app = createApp();
const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, ()=> {
    console.log(`Server running at port ${host}:${port}`);
});