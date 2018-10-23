'use strict';

module.exports.handler = (event, context, callback) => {
  let body = JSON.parse(event.body);

  if (body.user == "bob" && body.password == "MyNewSecretPassword") {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        token: 'abcd'
      }),
    });
  } else {
    callback(null, {
      statusCode: 401
    });
  }
};
