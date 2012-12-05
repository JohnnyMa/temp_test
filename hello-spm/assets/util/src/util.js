/*
define(function(require, exports, module) {

  function random(min, max) {
    return min + Math.round(Math.random() * (max - min))
  }

  module.exports = random
});*/


define(function(require, exports) {
  exports.random = function(min, max) {
    return min + Math.round(Math.random() * (max - min))
  }
})
