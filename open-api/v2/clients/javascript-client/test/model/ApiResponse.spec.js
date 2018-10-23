/**
 * Hafven Community-API
 * Hafven Community API [Development]. This might link to the homepage [http://hafven-community.ngrok.io](http://hafven-community.ngrok.io). Notice that all html tags are valid in this description. Feel free to be descriptive.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: apiteam@hafven-community.ngrok.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HafvenCommunityApi);
  }
}(this, function(expect, HafvenCommunityApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HafvenCommunityApi.ApiResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ApiResponse', function() {
    it('should create an instance of ApiResponse', function() {
      // uncomment below and update the code to test ApiResponse
      //var instane = new HafvenCommunityApi.ApiResponse();
      //expect(instance).to.be.a(HafvenCommunityApi.ApiResponse);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new HafvenCommunityApi.ApiResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new HafvenCommunityApi.ApiResponse();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new HafvenCommunityApi.ApiResponse();
      //expect(instance).to.be();
    });

  });

}));