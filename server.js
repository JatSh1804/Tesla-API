const express = require("express")
// const bodyparser = require("body-parser");
const app = express();
const path = require('path');
const cors=require('cors')

const carsData = require('./carsData.json');
console.log(carsData[0].id);
const PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'carsData.json')));
app.use(cors())

app.get("/", (req, res) => {
    res.json({ status: 'API is working...' })
    // res.sendfile(__dirname + '/index.html')
    console.log("File sent...")
});
app.get('/AllCar', (req, res) => {
    res.sendFile(__dirname + '/carsData.json')
})
app.get('/Car/:model', (req, res) => {
    const model = req.params.model;
    var response = {};
    for (let i = 0; i < carsData.length - 1; i++) {
        if (model == carsData[i].path.slice(1, carsData[i].path.length)) {
            response = carsData[i];
            res.json(response);
            return;
        } 
    }res.json({status:'Not Found'})    
})
app.listen(PORT, () => { console.log("Server has started on port:" + PORT) })