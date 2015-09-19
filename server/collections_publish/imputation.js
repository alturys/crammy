Meteor.publish("imputations-all", function(){
  return Imputations.find();
});
