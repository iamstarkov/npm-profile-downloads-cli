#!/usr/bin/env node
'use strict';
var meow = require('meow');
var npmProfileDownloadsCli = require('./');

var cli = meow([
	'Usage',
	'  $ npm-profile-downloads-cli [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ npm-profile-downloads-cli',
	'  unicorns & rainbows',
	'  $ npm-profile-downloads-cli ponies',
	'  ponies & rainbows'
]);

console.log(npmProfileDownloadsCli(cli.input[0] || 'unicorns'));
