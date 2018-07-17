# Collaboration
Use the Hafven Community Slack to chat
https://hafvencommunity.slack.com

# Community-API
https://community.hafven.de

Hafven Community Projects should have the possibility to access information of the Hafven.

## Description
- Middle which is independent from Cobot
- Possibility to integrate multiple data sources

## Communication Flow
AWS Api Gateway -> Community Hafven -> Cobot

## ToDos
- Add CircleCi further tests
- Access rights to AWS and Cloud Functions
- Understand AWS API Gateway / OAUTH Flow
- Build OAUTH into Community Hafven
- more commits

## Using the Hafven API

### oAuth2-flow using your Hafven App credentials

Start the oauth flow by sending your user to the following domain passing your app's client parameters. `redirect_uri` must match your app's registered domain and has to use https.
```
https://community.hafven.de/oauth/authorize?response_type=code&client_id=<your client id>&redirect_uri=<your apps callback url>&scope=<required scope>&state=<optional parameter that gets passed back to your redirect_uri>
```
The users will be asked to log in and approve your app using their Hafven Login credentials. After that users are redirected back to your app, using the `redirect_uri` parameter you provided in your initial request. A parameter called `code` will be added to the URL. You have to extract this information to for the next step. If you provided a state parameter it will be added as well.

In the final step you need to acquire an access token by sending a `POST` request to `https://community.hafven.de/oauth/access_token`. The request body should look like this: `client_id=<your client id>&client_secret=<your secret>&grant_type=authorization_code&code=<the code from the previous step>`

### Hafven Community API 
You can make requests to recieve the users information using the provided token in your Authorization Header: 
```
Authorization: Bearer <your token>
```
All endpoints are to be reached under the url `https://community.hafven.de/api/`

#### GET /user

GET request to `https://community.hafven.de/api/user` returns the user's name and email:
```
{
  "full_name": "users full name",
   "email": "users email adress"
}

```

## Getting Started

Add this snippet to yout build script.

```
$ npm install -g serverless
$ serverless deploy --stage dev -v
```

## Contributing

Pull requests are always welcome. We are grateful for any help or inspiration.

## License

```text
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```