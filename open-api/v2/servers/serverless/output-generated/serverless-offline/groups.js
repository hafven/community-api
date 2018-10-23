var Groups = {
  putGroups: (event, context, callback) => {
    const data = {};
    const response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(data),
    };
    callback(null, response);
  },
  getGroupFindByStatus: (event, context, callback) => {
    const data = {};
    const response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(data),
    };
    callback(null, response);
  },
  getGroupFindByTags: (event, context, callback) => {
    const data = {};
    const response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(data),
    };
    callback(null, response);
  },
  getGroup: (event, context, callback) => {
    const data = {};
    const response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(data),
    };
    callback(null, response);
  },
  postGroup: (event, context, callback) => {
    const data = {};
    const response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(data),
    };
    callback(null, response);
  },
  deleteGroup: (event, context, callback) => {
    const data = {};
    const response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(data),
    };
    callback(null, response);
  },
  postGroupUploadImage: (event, context, callback) => {
    const data = {};
    const response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(data),
    };
    callback(null, response);
  },
};

module.exports = Groups;