import express from 'express'; 
import mongoose from 'mongoose';

const app = express();

mongoose.connect("mongodb://localhost/firstapi")
 
app.use(express.json());

app.get("/", (req, res) => {
    res.send("ola");
})


app.listen(3000, () => {
    console.log('listening on port 3000🚀');
});