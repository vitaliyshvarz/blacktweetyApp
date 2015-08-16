'use strict';

describe('Testing initialDataFactory', function () {

  var initialDataFactory;

  beforeEach(function () {
    beforeEach(module('blacktweetyApp'));
    inject(function (_initialDataFactory_) {
      initialDataFactory = _initialDataFactory_;
    });

  });

  it('should be defined', function(){
    expect(initialDataFactory.getUsers).toBeDefined();
  });

  it('should not be defined', function(){
    expect(initialDataFactory.getUser).toBeDefined();
  });


});
