'use strict';

describe('Testing initialDataFactory', function () {

  var initialDataFactory;
  beforeEach(module('blacktweetyApp'));
  beforeEach(function () {
    inject(function (_initialDataFactory_) {
      initialDataFactory = _initialDataFactory_;
    });

  });

  it('getUsers be defined', function(){
    expect(initialDataFactory.getUsers).toBeDefined();
  });

});
