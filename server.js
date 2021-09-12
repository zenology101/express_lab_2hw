const express = require("express");
const app = express();
const port = 3000;

app.get('/greeting/:name', (req, res) => {
    console.log(req.params);
	res.send( "Wow! Hello there," + " " + req.params.name);
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.params);
	let tip = req.params.total * req.params.tipPercentage;
    
})

app.listen(port,() => {
    console.log('listening on port' , port);
});