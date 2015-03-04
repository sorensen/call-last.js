'use strict';

var assert = require('assert')

describe('call-last', function() {
  var last = require('./index')

  it('async', function(done) {
    var check = 0

    last(done, done, 2, 4, function() {
      check = 1
      done()
    })

    assert.strictEqual(check, 0)
  })

  it('sync', function(done) {
    var check = 0

    last.sync(done, done, 2, 4, function() {
      check = 1
      process.nextTick(function() {
        done()
      })
    })

    assert.strictEqual(check, 1)
  })
})
