var Community = {
  postGroups: (event, context, callback) => {
    const data = {};
    const response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(data),
    };
    callback(null, response);
  },
  getCommunityInventory: (event, context, callback) => {
    const data = {};
    const response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(data),
    };
    callback(null, response);
  },
  postCommunityMeetup: (event, context, callback) => {
    const data = {};
    const response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(data),
    };
    callback(null, response);
  },
  getCommunityMeetup: (event, context, callback) => {
    const data = {};
    const response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(data),
    };
    callback(null, response);
  },
  deleteCommunityMeetup: (event, context, callback) => {
    const data = {};
    const response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(data),
    };
    callback(null, response);
  },
};

module.exports = Community;