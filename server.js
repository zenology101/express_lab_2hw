const express = require("express");
const app = express();
const port =  3000;


app.get('/greeting/:name', (req, res) => {
    console.log(req.params);
	res.send( "Wow! Hello there," + " " + req.params.name);
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let total = Number(req.params.total);
    let tipPercentage = Number(req.params.tipPercentage);
    res.send("tip:" + total * tipPercentage/100);
})



app.listen(port,() => {
    console.log('listening on port' , port);
});