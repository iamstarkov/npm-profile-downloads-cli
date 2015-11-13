# npm-profile-downloads-cli [![Build Status](https://travis-ci.org/iamstarkov/npm-profile-downloads-cli.svg?branch=master)](https://travis-ci.org/iamstarkov/npm-profile-downloads-cli)

> My solid module


## Install

```
$ npm install --save npm-profile-downloads-cli
```


## Usage

```js
const npmProfileDownloadsCli = require('npm-profile-downloads-cli');

npmProfileDownloadsCli('unicorns');
//=> 'unicorns & rainbows'
```


## API

### npmProfileDownloadsCli(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global npm-profile-downloads-cli
```

```
$ npm-profile-downloads-cli --help

  Usage
    npm-profile-downloads-cli [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ npm-profile-downloads-cli
    unicorns & rainbows
    $ npm-profile-downloads-cli ponies
    ponies & rainbows
```


## License

MIT © [Vladimir Starkov](https://iamstarkov)
