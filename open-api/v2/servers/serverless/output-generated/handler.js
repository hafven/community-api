const user = require('./user.js');
const community = require('./community.js');
const groups = require('./groups.js');

module.exports = {
  postUser: user.postUser,
  postUserCreateWithArray: user.postUserCreateWithArray,
  postUserCreateWithList: user.postUserCreateWithList,
  getUserLogin: user.getUserLogin,
  getUserLogout: user.getUserLogout,
  getUser: user.getUser,
  putUser: user.putUser,
  deleteUser: user.deleteUser,
  postGroups: community.postGroups,
  getCommunityInventory: community.getCommunityInventory,
  postCommunityMeetup: community.postCommunityMeetup,
  getCommunityMeetup: community.getCommunityMeetup,
  deleteCommunityMeetup: community.deleteCommunityMeetup,
  putGroups: groups.putGroups,
  getGroupFindByStatus: groups.getGroupFindByStatus,
  getGroupFindByTags: groups.getGroupFindByTags,
  getGroup: groups.getGroup,
  postGroup: groups.postGroup,
  deleteGroup: groups.deleteGroup,
  postGroupUploadImage: groups.postGroupUploadImage,
};
