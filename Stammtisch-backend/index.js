const express = require("express");
const fs = require("fs");
const path = require("path");
const config = require("./utils/config");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

fs.readdir(path.join(__dirname, "middleware"), (err, files) => {
	if (err) {
		console.log(err);
		return;
	}
	files.forEach((file) => {
		const mod = require(path.join(__dirname, "middleware", file));
		mod.setup(app);
	});
	app.listen(config.port, () => {
		console.log(`server listening on port ${config.port}`);
	});
});
