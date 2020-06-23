let message = 'Nothing to see here UwU';

const setup = (app) => {
	app.get('/hello-stammtisch', (req, res) => {
		res.send(message);
	});

	app.post('/hello-stammtisch', (req, res) => {
		if (req.body && req.body.message) {
			message = req.body.message;
		}
		res.end();
	});
};

module.exports = { setup };
