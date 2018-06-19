"use strict";

const loginFormHtml = require("./src/html/loginform");

module.exports.handler = (event, context, callback) => {
  const response_type = getQueryParameter("response_type");
  const client_id = getQueryParameter("client_id");
  const state = getQueryParameter("state");
  console.info(`Auth request for client_id: ${client_id} with state: ${state}`);

  // Fail if required response_type is missing
  if (response_type) {
    callback(null, missingResponseTypeResponse);
  }

  // Fail if response_type is not code
  if (response_type !== "code") {
    callback(null, wrongResponseTypeResponse);
  }

  // Fail if required client_id is missing
  if (client_id === undefined) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        message: "Query parameter 'client_id' is missing."
      })
    });
  }

  // TODO: Retrieve application by client_id from database

  // TODO: Return html form
  if (event.httpMethod === "GET") {
    callback(null, {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html"
      },
      body: loginFormHtml
    });
  }

  if (body.user == "bob" && body.password == "MySecretPassword") {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        token: "abcd",
        input: event
      })
    });
  } else {
    callback(null, {
      statusCode: 401
    });
  }

  function getQueryParameter(name) {
    if (
      event.queryStringParameters !== null &&
      typeof event.queryStringParameters[name] !== "undefined"
    ) {
      return event.queryStringParameters[name];
    } else {
      return undefined;
    }
  }
};

const missingResponseTypeResponse = {
  statusCode: 400,
  body: JSON.stringify({
    message: "Query parameter 'response_type' is missing."
  })
};

const wrongResponseTypeResponse = {
  statusCode: 400,
  body: JSON.stringify({
    message: "todo"
  })
};
