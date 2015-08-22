'use strict';

describe('Testing userFactory', function () {

  var userFactory;

  beforeEach(module('blacktweetyApp'));
  beforeEach(function () {
    inject(function (_userFactory_) {
      userFactory = _userFactory_;
    });

  });

  describe("userFactory should contain", function () {

    it("getAllUsers method", function () {
      expect(userFactory.getAllUsers).toBeDefined();
    });

    it("addNewUser method", function () {
      expect(userFactory.addNewUser).toBeDefined();
    });

    it("uploadAvatar method", function () {
      expect(userFactory.uploadAvatar).toBeDefined();
    });
  });

});
