CrammyApp.Client.Functions.Calendar = {};

var inputationsFunctions = CrammyApp.Functions.Imputations;

//Return an array with all the months [{index : 0, label : "Janvier"},...]
CrammyApp.Client.Functions.Calendar.getMonths = function () {
  var months = moment.months();
  var monthObjects = [];
  for (var i = 0; i < months.length; i++) {
    var o = {"index" : i , "label" : months[i]};
    monthObjects.push(o);
  }
  return monthObjects;
}

//Return a status for day cells. This status is a CSS class to inject in template by helper.
//Parameters :
//  userId : A Meteor user ._id prop
//  date :  a moment object
CrammyApp.Client.Functions.Calendar.getStatus =  function (userId,oneMoment) {
  if (moment()< oneMoment) {
    return "imputation-future";
  }
  var daysImputations = Imputations.find({user:userId,date:oneMoment.toISOString()}).fetch();
  var values = _.pluck(daysImputations,"value");
  var sum = _.reduce(values, function(memo, value){ return memo + value; }, 0);
  var diff = inputationsFunctions.checkSum(sum);
  if (diff < 0 ) {
    return "imputation-negative";
  }
  if (diff === 0) {
    return "imputation-completed";
  }
  return "imputation-positive";
}
