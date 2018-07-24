# hafven_community_api

HafvenCommunityApi - JavaScript client for hafven_community_api
Hafven Community API [Development]. This might link to the homepage [http://hafven-community.ngrok.io](http://hafven-community.ngrok.io). Notice that all html tags are valid in this description. Feel free to be descriptive.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 0.0.1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install hafven_community_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your hafven_community_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('hafven_community_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/hafven_community_api
then install it via:

```shell
    npm install YOUR_USERNAME/hafven_community_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var HafvenCommunityApi = require('hafven_community_api');

var defaultClient = HafvenCommunityApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: hafven_auth
var hafven_auth = defaultClient.authentications['hafven_auth'];
hafven_auth.accessToken = "YOUR ACCESS TOKEN"

var api = new HafvenCommunityApi.CommunityApi()

var body = new HafvenCommunityApi.Group(); // {Group} Group object that needs to be added to the community


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addGroup(body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://api.hafven-community.ngrok.io/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HafvenCommunityApi.CommunityApi* | [**addGroup**](docs/CommunityApi.md#addGroup) | **POST** /groups | Add a new community group
*HafvenCommunityApi.CommunityApi* | [**deleteMeetup**](docs/CommunityApi.md#deleteMeetup) | **DELETE** /community/meetup/{meetupId} | Delete meetup by ID
*HafvenCommunityApi.CommunityApi* | [**getInventory**](docs/CommunityApi.md#getInventory) | **GET** /community/inventory | Returns group inventories by status
*HafvenCommunityApi.CommunityApi* | [**getMeetupById**](docs/CommunityApi.md#getMeetupById) | **GET** /community/meetup/{meetupId} | Find meetup by ID
*HafvenCommunityApi.CommunityApi* | [**placeMeetup**](docs/CommunityApi.md#placeMeetup) | **POST** /community/meetup | Place an meetup for a group
*HafvenCommunityApi.GroupsApi* | [**addGroup**](docs/GroupsApi.md#addGroup) | **POST** /groups | Add a new community group
*HafvenCommunityApi.GroupsApi* | [**deleteGroup**](docs/GroupsApi.md#deleteGroup) | **DELETE** /group/{groupId} | Deletes a group
*HafvenCommunityApi.GroupsApi* | [**findGroupsByStatus**](docs/GroupsApi.md#findGroupsByStatus) | **GET** /group/findByStatus | Finds Groups by status
*HafvenCommunityApi.GroupsApi* | [**findGroupsByTags**](docs/GroupsApi.md#findGroupsByTags) | **GET** /group/findByTags | Finds Groups by tags
*HafvenCommunityApi.GroupsApi* | [**getGroupById**](docs/GroupsApi.md#getGroupById) | **GET** /group/{groupId} | Find group by ID
*HafvenCommunityApi.GroupsApi* | [**updateGroup**](docs/GroupsApi.md#updateGroup) | **PUT** /groups | Update a community group
*HafvenCommunityApi.GroupsApi* | [**updateGroupWithForm**](docs/GroupsApi.md#updateGroupWithForm) | **POST** /group/{groupId} | Updates a group in the community with form data
*HafvenCommunityApi.GroupsApi* | [**uploadFile**](docs/GroupsApi.md#uploadFile) | **POST** /group/{groupId}/uploadImage | uploads an image
*HafvenCommunityApi.MeetupsApi* | [**deleteMeetup**](docs/MeetupsApi.md#deleteMeetup) | **DELETE** /community/meetup/{meetupId} | Delete meetup by ID
*HafvenCommunityApi.MeetupsApi* | [**getMeetupById**](docs/MeetupsApi.md#getMeetupById) | **GET** /community/meetup/{meetupId} | Find meetup by ID
*HafvenCommunityApi.MeetupsApi* | [**placeMeetup**](docs/MeetupsApi.md#placeMeetup) | **POST** /community/meetup | Place an meetup for a group
*HafvenCommunityApi.UserApi* | [**createUser**](docs/UserApi.md#createUser) | **POST** /user | Create user
*HafvenCommunityApi.UserApi* | [**createUsersWithArrayInput**](docs/UserApi.md#createUsersWithArrayInput) | **POST** /user/createWithArray | Creates list of users with given input array
*HafvenCommunityApi.UserApi* | [**createUsersWithListInput**](docs/UserApi.md#createUsersWithListInput) | **POST** /user/createWithList | Creates list of users with given input array
*HafvenCommunityApi.UserApi* | [**deleteUser**](docs/UserApi.md#deleteUser) | **DELETE** /user/{username} | Delete user
*HafvenCommunityApi.UserApi* | [**getUserByName**](docs/UserApi.md#getUserByName) | **GET** /user/{username} | Get user by user name
*HafvenCommunityApi.UserApi* | [**loginUser**](docs/UserApi.md#loginUser) | **GET** /user/login | Logs user into the system
*HafvenCommunityApi.UserApi* | [**logoutUser**](docs/UserApi.md#logoutUser) | **GET** /user/logout | Logs out current logged in user session
*HafvenCommunityApi.UserApi* | [**updateUser**](docs/UserApi.md#updateUser) | **PUT** /user/{username} | Updated user


## Documentation for Models

 - [HafvenCommunityApi.ApiResponse](docs/ApiResponse.md)
 - [HafvenCommunityApi.Category](docs/Category.md)
 - [HafvenCommunityApi.Group](docs/Group.md)
 - [HafvenCommunityApi.Meetup](docs/Meetup.md)
 - [HafvenCommunityApi.Tag](docs/Tag.md)
 - [HafvenCommunityApi.User](docs/User.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: api_key
- **Location**: HTTP header

### hafven_auth

- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: http://hafven.de/oauth/dialog
- **Scopes**: 
  - write:groups: modify groups in your account
  - read:groups: read your groups
