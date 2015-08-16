'use strict';

describe('Testing userFactory', function () {

  var userFactory;

  beforeEach(function () {
    //beforeEach(module('blacktweetyApp'));
    inject(function (_userFactory_) {
      userFactory = _userFactory_;
    });

  });
    //     it("psDeregister method", function () {
    //   expect(userFactory.dddd).toBeDefined();
    // });
  describe("should contain", function () {

    it("init methods", function () {
      expect(userFactory.getAllUser).toBeDefined();
    });

    it("psRegister method", function () {
      expect(userFactory.addNewUser).toBeDefined();
    });

    it("psDeregister method", function () {
      expect(userFactory.uploadAvatar).toBeDefined();
    });
  });

});
