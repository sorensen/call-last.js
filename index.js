
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

module.exports = function() {
  var cb = getLast(slice.call(arguments))
  if (cb) process.nextTick(cb)
}

module.exports.sync = function() {
  var cb = getLast(slice.call(arguments))
  if (cb) cb()
}
