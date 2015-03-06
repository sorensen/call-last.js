
var varType = require('var-type')
  , slice = Array.prototype.slice

/**
 * Find the last function argument used and call it
 */

function getLast(arr) {
  return arr.filter(function(x) {
    return varType(x, 'Function')
  }).pop()
}

// Async function call
module.exports = function() {
  var cb = getLast(slice.call(arguments))
  if (cb) process.nextTick(cb)
}

// Apply given arguments to each callback found
module.exports.with = function() {
  var args = slice.call(arguments)

  return function() {
    var cb = getLast(slice.call(arguments))
    if (cb) process.nextTick(function() {
      cb.apply(cb, args)
    })
  }
}

// Sync function call
module.exports.sync = function() {
  var cb = getLast(slice.call(arguments))
  if (cb) cb()
}

// Apply arguments, sync
module.exports.withSync = function() {
  var args = slice.call(arguments)

  return function() {
    var cb = getLast(slice.call(arguments))
    if (cb) cb.apply(cb, args)
  }
}