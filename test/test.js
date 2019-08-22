const asset = require('assert');
const utils = require('../build/utils');

describe('1.测试类型判断', function() {
  describe('#isObject', function() {
    it('判断 {a:1} 是否为对象', function() {
      asset.equal(utils.isObject({a:1}), true);
    });
  })
  describe('#isArray', function() {
    it('判断 [1,2,3] 是否为数组', function() {
      asset.equal(utils.isArray([1,2,3]), true);
    });
  })
  describe('#isDate', function() {
    it('判断 new Date() 是否为日期对象', function() {
      asset.equal(utils.isDate(new Date()), true);
    });
  })
  describe('#isNumber', function() {
    it('判断 100 是否为数字类型', function() {
      asset.equal(utils.isNumber(100), true);
    });
  })
  describe('#isString', function() {
    it('判断 "Hello World" 是否为数字类型', function() {
      asset.equal(utils.isString('Hello World'), true);
    });
  })
  describe('#isBoolean', function() {
    it('判断 false 是否为布尔类型', function() {
      asset.equal(utils.isBoolean(false), true);
    });
  })
  describe('#isFunction', function() {
    it('判断 function(){return "123"} 是否为函数类型', function() {
      asset.equal(utils.isFunction(function(){return '123'}), true);
    });
  })
});