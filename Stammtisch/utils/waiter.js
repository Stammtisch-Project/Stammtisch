const config = require("./config");

// The waiter brings the good stuff to the customers
// aka it's the server connection
module.exports = {
	get: async function (route) {
		const response = await fetch(
			`${config.hostname}:${config.port}${route}`
		);
		const data = await response.text();
		return data;
	},
	post: async function (route, message) {
		const response = await fetch(
			`${config.hostname}:${config.port}${route}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message: message }),
			}
		);
		const data = await response.text();
		return data;
	},
};
