import Express from "express";

const app = Express();
app.use(Express.json())
const port = 1824;
const hostname = "http://127.0.0.1:";

app.listen(port, () => {
    console.log(`Server is running on ${hostname}${port}`)
});

app.get("/", (req, res) => {
    res.json("Server is running");
});

app.post('/travels/create', (req, res) => {
    res.json(req.body)
    console.log('Post com sucesso')
})
