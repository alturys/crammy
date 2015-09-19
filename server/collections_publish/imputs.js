Meteor.publish("imputation-code-all", function(){
  return ImputationCode.find();
});
