'use strict';
var test = require('tape');
var execa = require('execa');
global.Promise = require('pinkie-promise');

test('cli', function (t) {
	execa('./cli.js', ['day', 'sindresorhus']).then(function (res) {
		t.assert(res.stdout.length > 0);
		t.end();
	});
});
