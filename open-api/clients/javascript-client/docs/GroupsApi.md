# HavfenCommunityApi.GroupsApi

All URIs are relative to *http://api.hafven-community.ngrok.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGroup**](GroupsApi.md#addGroup) | **POST** /groups | Add a new community group
[**deleteGroup**](GroupsApi.md#deleteGroup) | **DELETE** /group/{groupId} | Deletes a group
[**findGroupsByStatus**](GroupsApi.md#findGroupsByStatus) | **GET** /group/findByStatus | Finds Groups by status
[**findGroupsByTags**](GroupsApi.md#findGroupsByTags) | **GET** /group/findByTags | Finds Groups by tags
[**getGroupById**](GroupsApi.md#getGroupById) | **GET** /group/{groupId} | Find group by ID
[**updateGroup**](GroupsApi.md#updateGroup) | **PUT** /groups | Update a community group
[**updateGroupWithForm**](GroupsApi.md#updateGroupWithForm) | **POST** /group/{groupId} | Updates a group in the community with form data
[**uploadFile**](GroupsApi.md#uploadFile) | **POST** /group/{groupId}/uploadImage | uploads an image


<a name="addGroup"></a>
# **addGroup**
> addGroup(body)

Add a new community group



### Example
```javascript
var HavfenCommunityApi = require('havfen_community_api');
var defaultClient = HavfenCommunityApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: hafven_auth
var hafven_auth = defaultClient.authentications['hafven_auth'];
hafven_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HavfenCommunityApi.GroupsApi();

var body = new HavfenCommunityApi.Group(); // Group | Group object that needs to be added to the community


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

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(groupId, opts)

Deletes a group



### Example
```javascript
var HavfenCommunityApi = require('havfen_community_api');
var defaultClient = HavfenCommunityApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: hafven_auth
var hafven_auth = defaultClient.authentications['hafven_auth'];
hafven_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HavfenCommunityApi.GroupsApi();

var groupId = 789; // Number | Group id to delete

var opts = { 
  'apiKey': "apiKey_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGroup(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| Group id to delete | 
 **apiKey** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[hafven_auth](../README.md#hafven_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="findGroupsByStatus"></a>
# **findGroupsByStatus**
> [Group] findGroupsByStatus(status)

Finds Groups by status

Multiple status values can be provided with comma separated strings

### Example
```javascript
var HavfenCommunityApi = require('havfen_community_api');
var defaultClient = HavfenCommunityApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: hafven_auth
var hafven_auth = defaultClient.authentications['hafven_auth'];
hafven_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HavfenCommunityApi.GroupsApi();

var status = ["status_example"]; // [String] | Status values that need to be considered for filter


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findGroupsByStatus(status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**[String]**](String.md)| Status values that need to be considered for filter | 

### Return type

[**[Group]**](Group.md)

### Authorization

[hafven_auth](../README.md#hafven_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="findGroupsByTags"></a>
# **findGroupsByTags**
> [Group] findGroupsByTags(tags)

Finds Groups by tags

Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example
```javascript
var HavfenCommunityApi = require('havfen_community_api');
var defaultClient = HavfenCommunityApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: hafven_auth
var hafven_auth = defaultClient.authentications['hafven_auth'];
hafven_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HavfenCommunityApi.GroupsApi();

var tags = ["tags_example"]; // [String] | Tags to filter by


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findGroupsByTags(tags, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | [**[String]**](String.md)| Tags to filter by | 

### Return type

[**[Group]**](Group.md)

### Authorization

[hafven_auth](../README.md#hafven_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="getGroupById"></a>
# **getGroupById**
> Group getGroupById(groupId)

Find group by ID

Returns a single group

### Example
```javascript
var HavfenCommunityApi = require('havfen_community_api');
var defaultClient = HavfenCommunityApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new HavfenCommunityApi.GroupsApi();

var groupId = 789; // Number | ID of group to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupById(groupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| ID of group to return | 

### Return type

[**Group**](Group.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="updateGroup"></a>
# **updateGroup**
> updateGroup(body)

Update a community group



### Example
```javascript
var HavfenCommunityApi = require('havfen_community_api');
var defaultClient = HavfenCommunityApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: hafven_auth
var hafven_auth = defaultClient.authentications['hafven_auth'];
hafven_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HavfenCommunityApi.GroupsApi();

var body = new HavfenCommunityApi.Group(); // Group | Group object that needs to be added to the community


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateGroup(body, callback);
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

<a name="updateGroupWithForm"></a>
# **updateGroupWithForm**
> updateGroupWithForm(groupId, opts)

Updates a group in the community with form data



### Example
```javascript
var HavfenCommunityApi = require('havfen_community_api');
var defaultClient = HavfenCommunityApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: hafven_auth
var hafven_auth = defaultClient.authentications['hafven_auth'];
hafven_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HavfenCommunityApi.GroupsApi();

var groupId = 789; // Number | ID of group that needs to be updated

var opts = { 
  'name': "name_example", // String | Updated name of the group
  'status': "status_example" // String | Updated status of the group
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateGroupWithForm(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| ID of group that needs to be updated | 
 **name** | **String**| Updated name of the group | [optional] 
 **status** | **String**| Updated status of the group | [optional] 

### Return type

null (empty response body)

### Authorization

[hafven_auth](../README.md#hafven_auth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/xml, application/json

<a name="uploadFile"></a>
# **uploadFile**
> ApiResponse uploadFile(groupId, opts)

uploads an image



### Example
```javascript
var HavfenCommunityApi = require('havfen_community_api');
var defaultClient = HavfenCommunityApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: hafven_auth
var hafven_auth = defaultClient.authentications['hafven_auth'];
hafven_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HavfenCommunityApi.GroupsApi();

var groupId = 789; // Number | ID of group to update

var opts = { 
  'additionalMetadata': "additionalMetadata_example", // String | Additional data to pass to server
  'file': "/path/to/file.txt" // File | file to upload
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadFile(groupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| ID of group to update | 
 **additionalMetadata** | **String**| Additional data to pass to server | [optional] 
 **file** | **File**| file to upload | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[hafven_auth](../README.md#hafven_auth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

