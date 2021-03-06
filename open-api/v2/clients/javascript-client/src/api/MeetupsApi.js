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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Meetup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Meetup'));
  } else {
    // Browser globals (root is window)
    if (!root.HafvenCommunityApi) {
      root.HafvenCommunityApi = {};
    }
    root.HafvenCommunityApi.MeetupsApi = factory(root.HafvenCommunityApi.ApiClient, root.HafvenCommunityApi.Meetup);
  }
}(this, function(ApiClient, Meetup) {
  'use strict';

  /**
   * Meetups service.
   * @module api/MeetupsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new MeetupsApi. 
   * @alias module:api/MeetupsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteMeetup operation.
     * @callback module:api/MeetupsApi~deleteMeetupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete meetup by ID
     * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
     * @param {Number} meetupId ID of the meetup that needs to be deleted
     * @param {module:api/MeetupsApi~deleteMeetupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteMeetup = function(meetupId, callback) {
      var postBody = null;

      // verify the required parameter 'meetupId' is set
      if (meetupId === undefined || meetupId === null) {
        throw new Error("Missing the required parameter 'meetupId' when calling deleteMeetup");
      }


      var pathParams = {
        'meetupId': meetupId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/community/meetup/{meetupId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMeetupById operation.
     * @callback module:api/MeetupsApi~getMeetupByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Meetup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find meetup by ID
     * For valid response try integer IDs with value &gt;&#x3D; 1 and &lt;&#x3D; 10. Other values will generated exceptions
     * @param {Number} meetupId ID of meetup that needs to be fetched
     * @param {module:api/MeetupsApi~getMeetupByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Meetup}
     */
    this.getMeetupById = function(meetupId, callback) {
      var postBody = null;

      // verify the required parameter 'meetupId' is set
      if (meetupId === undefined || meetupId === null) {
        throw new Error("Missing the required parameter 'meetupId' when calling getMeetupById");
      }


      var pathParams = {
        'meetupId': meetupId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = Meetup;

      return this.apiClient.callApi(
        '/community/meetup/{meetupId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the placeMeetup operation.
     * @callback module:api/MeetupsApi~placeMeetupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Meetup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Place an meetup for a group
     * 
     * @param {module:model/Meetup} body meetup placed for purchasing the group
     * @param {module:api/MeetupsApi~placeMeetupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Meetup}
     */
    this.placeMeetup = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling placeMeetup");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = Meetup;

      return this.apiClient.callApi(
        '/community/meetup', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
