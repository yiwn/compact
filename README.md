# compact

Create and return clone of provided object by excluding `null` and `undefined` properties.

## Installation

Using [component](https://github.com/component/component)

    $ component install yiwn/compact

Using [npm](http://npmjs.org/) for [browserify](http://browserify.org/)

    $ npm install yiwn-compact

## Usage

Example:

```js
var compact = require('yiwn-compact');

var obj = {
        a: 0,
        b: null,
        c: 'Shakira'
    };

var arr = [0, null, 'Shakira'];

compact(obj); // -> { a: 0, c: 'Sharkira' }
compact(obj); // -> [0, 'Shakira']
```

## Test

Run tests with [mocha](http://mochajs.org/)

    $ make test

## License

The MIT License

