'use strict';

module.exports.handler = (event, context, callback) => {
  let name = 'Hafven Meetup Team';

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello ' + name,
      input: event,
    }),
  });
};
