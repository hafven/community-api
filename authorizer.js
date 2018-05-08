'use strict';

module.exports.handler = (event, context, callback) => {
  console.log('Client token: ' + event.authorizationToken);
  console.log('Method ARN: ' + event.methodArn);
  
  if (event.authorizationToken == 'true') {
    callback(null, generatePolicy('user', 'Allow', event.methodArn));
  } else {
    callback(null, generatePolicy('user', 'Deny', event.methodArn));
  }
};
  
let userName = 'Tom';

function generatePolicy(principalId, effect, resource) {
  return {
    'principalId': principalId,
    'context': {
      'Location': 'Hafven',
      'Name': userName
    },
    'policyDocument': {
      'Version': '2012-10-17',
      'Statement': [{
        'Action': 'execute-api:Invoke',
        'Effect': effect,
        'Resource': resource
      }]
    }
  };
}
