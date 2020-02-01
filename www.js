post("/command", (req, res) => {

	console.log("Command", req.body);
	res.end();

});
