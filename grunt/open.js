'use strict';

module.exports = {
	server: {
		path: 'http://localhost:<%= connect.options.port %>'
	},
	staging: {
		path: 'http://staging.cwparsons.ca'
	},
	production: {
		path: 'http://cwparsons.ca'
	}
};
