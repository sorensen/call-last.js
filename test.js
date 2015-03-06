'use strict';

var info = require('./package.json')
  , assert = require('assert')
  , ase = assert.strictEqual

describe(info.name + ' - v' + info.version, function() {
  var last = require('./index')

  it('async', function(done) {
    var check = 0

    last(done, done, 2, 4, function() {
      check = 1
      done()
    })

    assert.strictEqual(check, 0)
  })

  it('with', function(done) {
    var check = 0
      , callWith = last.with(null, 'hello')

    callWith(done, done, 2, 4, function(err, str) {
      check = 1
      ase(err, null)
      ase(str, 'hello')
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
