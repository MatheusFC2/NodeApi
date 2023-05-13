import express from 'express'; 

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("ola");
})


app.listen(3000, () => {
    console.log('listening on port 3000🚀');
});