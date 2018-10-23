# HafvenCommunityApi.CommunityApi

All URIs are relative to *http://api.hafven-community.ngrok.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGroup**](CommunityApi.md#addGroup) | **POST** /groups | Add a new community group
[**deleteMeetup**](CommunityApi.md#deleteMeetup) | **DELETE** /community/meetup/{meetupId} | Delete meetup by ID
[**getInventory**](CommunityApi.md#getInventory) | **GET** /community/inventory | Returns group inventories by status
[**getMeetupById**](CommunityApi.md#getMeetupById) | **GET** /community/meetup/{meetupId} | Find meetup by ID
[**placeMeetup**](CommunityApi.md#placeMeetup) | **POST** /community/meetup | Place an meetup for a group


<a name="addGroup"></a>
# **addGroup**
> addGroup(body)

Add a new community group



### Example
```javascript
var HafvenCommunityApi = require('hafven_community_api');
var defaultClient = HafvenCommunityApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: hafven_auth
var hafven_auth = defaultClient.authentications['hafven_auth'];
hafven_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HafvenCommunityApi.CommunityApi();

var body = new HafvenCommunityApi.Group(); // Group | Group object that needs to be added to the community


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addGroup(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Group**](Group.md)| Group object that needs to be added to the community | 

### Return type

null (empty response body)

### Authorization

[hafven_auth](../README.md#hafven_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json

<a name="deleteMeetup"></a>
# **deleteMeetup**
> deleteMeetup(meetupId)

Delete meetup by ID

For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

### Example
```javascript
var HafvenCommunityApi = require('hafven_community_api');

var apiInstance = new HafvenCommunityApi.CommunityApi();

var meetupId = 789; // Number | ID of the meetup that needs to be deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMeetup(meetupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meetupId** | **Number**| ID of the meetup that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="getInventory"></a>
# **getInventory**
> {&#39;String&#39;: &#39;Number&#39;} getInventory()

Returns group inventories by status

Returns a map of status codes to quantities

### Example
```javascript
var HafvenCommunityApi = require('hafven_community_api');
var defaultClient = HafvenCommunityApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HafvenCommunityApi.CommunityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventory(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**{&#39;String&#39;: &#39;Number&#39;}**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMeetupById"></a>
# **getMeetupById**
> Meetup getMeetupById(meetupId)

Find meetup by ID

For valid response try integer IDs with value &gt;&#x3D; 1 and &lt;&#x3D; 10. Other values will generated exceptions

### Example
```javascript
var HafvenCommunityApi = require('hafven_community_api');

var apiInstance = new HafvenCommunityApi.CommunityApi();

var meetupId = 789; // Number | ID of meetup that needs to be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMeetupById(meetupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meetupId** | **Number**| ID of meetup that needs to be fetched | 

### Return type

[**Meetup**](Meetup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="placeMeetup"></a>
# **placeMeetup**
> Meetup placeMeetup(body)

Place an meetup for a group



### Example
```javascript
var HafvenCommunityApi = require('hafven_community_api');

var apiInstance = new HafvenCommunityApi.CommunityApi();

var body = new HafvenCommunityApi.Meetup(); // Meetup | meetup placed for purchasing the group


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.placeMeetup(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Meetup**](Meetup.md)| meetup placed for purchasing the group | 

### Return type

[**Meetup**](Meetup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

