const merge = require('merge');

let config;

if (!config) {
	try {
		config = require('../defaultConfig');
	} catch (e) {}
	try {
		const overwrite = require('../config');
		config = merge.recursive(config || {}, overwrite);
	} catch (e) {}
}

module.exports = config;