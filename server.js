const express = require("express")
// const bodyparser = require("body-parser");
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const path = require('path');
const cors = require('cors')

//const carsData = require('./carsData.json');
//console.log(carsData[0].id);
const PORT = process.env.PORT || 3001;

app.use(cors())
// Middleware to check API key
const apiKey = process.env.ACCESS_PASS;
const checkApiKey = (req, res, next) => {
    const providedApiKey = req.headers['x-api-key'];
    if (providedApiKey == apiKey) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};
// app.use(checkApiKey);


async function GetData(id) {
    if (id == 'AllCar') {
        return {status:"Endpoint closed for now.};
        await req.find().then((data) => { console.log(data); return data });
    } else {
        return await req.find({ path: '/' + id }).then(data => { console.log(data); return data });
    }
}

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pw0jova.mongodb.net/Tesla`)
    .then(() => { console.log('Connected!') });
const schema = new mongoose.Schema({}, { collection: 'cars', strict: false });
const req = mongoose.model("Cars", schema);

app.get("/", (req, res) => {
    res.json({ status: 'API is working...' })
    console.log("File sent...")
});
app.get('/AllCar', async (req, res) => {
    const data = await GetData('AllCar');
    res.json(data);
    console.log('Data Sent')
})
app.get('/Car/:model', async (req, res) => {
    const model = req.params.model;
    console.log(model)
    const data = await GetData(model);
    res.json(data)
})
app.listen(PORT, () => { console.log("Server has started on port:" + PORT) })
