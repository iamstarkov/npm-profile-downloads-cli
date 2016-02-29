#!/usr/bin/env node
'use strict';
var meow = require('meow');
var npmProfileDownloads = require('npm-profile-downloads');

var cli = meow([
	'Usage',
	'  $ npm-profile-downloads <day|week|month> <username>',
	'',
	'Examples',
	'  $ npm-profile-downloads month sindresorhus',
	'  323196379',
	'  $ npm-profile-downloads month tjholowaychuk',
	'  148049092'
], {
	alias: { h: 'help' }
});

var period = cli.input[0];
var username = cli.input[1];

if (!period || !username) {
	throw new Error('Period or Username had not been specified');
}

npmProfileDownloads('last-' + period, username)
	.then(function (downloads) {
		console.log(downloads);
	})
	.catch(function (err) {
		throw err;
	});
