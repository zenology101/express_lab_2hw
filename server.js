const express = require("express");
const app = express();
const port =  3000;
const eightBall = require("./model/8ball")


app.get('/greeting/:name', (req, res) => {
    console.log(req.params);
	res.send( "Wow! Hello there," + " " + req.params.name);
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let total = Number(req.params.total);
    let tipPercentage = Number(req.params.tipPercentage);
    res.send("tip:" + total * tipPercentage/100);
})

app.get("/magic/:phrase", (req,res) => {
    //copied the random function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function index (max){
        return Math.floor(Math.random() * max)
    };
    let randomBall = index(eightBall.length)

    res.send(`<h1> ${req.params.phrase + ": " + eightBall[randomBall]}</h1>`)
})


app.listen(port,() => {
    console.log('listening on port' , port);
});