Meteor.publish("users-all", function(argument){
  return Meteor.users.find();
});
