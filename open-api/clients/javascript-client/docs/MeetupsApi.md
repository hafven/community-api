# HavfenCommunityApi.MeetupsApi

All URIs are relative to *http://api.hafven-community.ngrok.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMeetup**](MeetupsApi.md#deleteMeetup) | **DELETE** /community/meetup/{meetupId} | Delete meetup by ID
[**getMeetupById**](MeetupsApi.md#getMeetupById) | **GET** /community/meetup/{meetupId} | Find meetup by ID
[**placeMeetup**](MeetupsApi.md#placeMeetup) | **POST** /community/meetup | Place an meetup for a group


<a name="deleteMeetup"></a>
# **deleteMeetup**
> deleteMeetup(meetupId)

Delete meetup by ID

For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

### Example
```javascript
var HavfenCommunityApi = require('havfen_community_api');

var apiInstance = new HavfenCommunityApi.MeetupsApi();

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

<a name="getMeetupById"></a>
# **getMeetupById**
> Meetup getMeetupById(meetupId)

Find meetup by ID

For valid response try integer IDs with value &gt;&#x3D; 1 and &lt;&#x3D; 10. Other values will generated exceptions

### Example
```javascript
var HavfenCommunityApi = require('havfen_community_api');

var apiInstance = new HavfenCommunityApi.MeetupsApi();

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
var HavfenCommunityApi = require('havfen_community_api');

var apiInstance = new HavfenCommunityApi.MeetupsApi();

var body = new HavfenCommunityApi.Meetup(); // Meetup | meetup placed for purchasing the group


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

