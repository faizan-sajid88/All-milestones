/**
 *
 * @namespace faker.mobile
 */
var Mobile = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * mobile
     *
     * @method faker.movie.movie
     */
    self.mobile = function () {
      return fake('{{mobile.android}} {{mobile.ios}}');
    };
  
    self.mobile.schema = {
      "description": "Android mobiles",
      "sampleResults": ["Mi", "Samsung", "One plus"]
    };
  
    /**
     * android
     *
     * @method faker.mobile.android
     */
    self.manufacturer = function () {
      return faker.random.arrayElement(faker.definitions.mobile.android);
    };
  
    self.android.schema = {
      "description": "android mobiles",
      "sampleResults": ["Lava", "Oppo", "Vivo"]
    };
  
  
    /**
     * ios
     *
     * @method faker.mobile.ios
     */
    self.ios = function () {
      return faker.random.arrayElement(faker.definitions.mobile.ios);
    };
  
    self.ios.schema = {
      "description": "ios mobiles",
      "sampleResults": ["I phone", "I pad", "I pod"]
    };
  
 
}
  module["exports"] = Mobile;
  