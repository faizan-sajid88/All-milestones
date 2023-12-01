if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
  }
  
  describe("mobile.js", function () {
    describe("mobile()", function () {
        it("returns a random mobile", function () {
            sinon.stub(faker.mobile, 'mobile').returns('android');
            var mobile = faker.mobile.mobile();
  
            assert.equal(mobile, 'mobile');
            faker.mobile.mobile.restore();
        });
    });
  
    describe("android()", function () {
        it("returns random android", function () {
            sinon.stub(faker.mobile, 'android').returns('samsung');
            var android = faker.mobile.android();
  
            assert.equal(android, 'Porsche');
            faker.mobile.android.restore();
        });
    });

    describe("ios()", function () {
        it("returns random ios", function () {
            sinon.stub(faker.mobile, 'ios').returns('apple');
            var ios = faker.mobile.ios();
  
            assert.equal(ios, 'Porsche');
            faker.mobile.ios.restore();
        });
    });
  })