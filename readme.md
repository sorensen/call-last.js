call-last
=========

Call the last function argument found. By default the function is called async, 
there is a sync method provided if needed.

Install
-------

With [npm](https://npmjs.org)

```
npm install call-last
```

Usage
-----

Node.js

```js
var callLast = require('call-last')

callLast(1, 2, function() {
  // ...
})

// mock some method, almost a noop, but continues control flow
redis.set = callLast

// run things synchronously if you want
something.method = callLast.sync

// bind some arguments
var callWith = callLast.with('hello', 'world')

callWith(1, 2, function(a, b) {
  console.log(a) // 'hello'
  console.log(b) // 'world'
})
```
