CrammyApp.Functions.Users = {};

CrammyApp.Functions.Users.getUserIdByTrigramme = function (trigramme) {
  var oneUser = Meteor.users.findOne({"profile.trigramme" : trigramme});
  if (oneUser) {
    return oneUser._id;
  }
}
