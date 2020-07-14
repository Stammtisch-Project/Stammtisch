const mysql = require("mysql");
const config = require("../utils/config");

const connection = mysql.createConnection({
	host: config.database.host,
	user: config.database.user,
	password: config.database.password,
	database: config.database.databaseName,
	insecureAuth: true,
});

const setup = (app) => {
	connection.connect();
	app.put("/api/db/user", (req, res) => {
		connection.query(
			`
			insert into users values (?, ?, ?)
		`,
			["testusername", "Testvorname", "Testnachname"],
			(error, results, fields) => {
				if (error) {
					console.log(error);
					res.send(error);
					return;
				}
				res.end();
			}
		);
	});

	app.get("/api/db/user", (req, res) => {
		connection.query(
			`
			select * from users
			 where username = ?
		`,
			[req.body.username],
			(error, results, fields) => {
				if (error) {
					console.log(error);
					res.send(error);
					return;
				}
				res.send({ results, fields });
			}
		);
	});
};

module.exports = { setup };
