CrammyApp.Functions.Calendar = {};
var inputationsFunctions = CrammyApp.Functions.Imputations;

CrammyApp.Functions.Calendar.calculateDays = function () {
  //get selected values from session ie user selection
  var selectedYear = Session.get("selectedYear");
  var selectedMonth = Session.get("selectedMonth");
  var theMoment = moment({ year :selectedYear, month :selectedMonth});
  var totalDayOfMonth = theMoment.daysInMonth();

  var days = [];
  for (var i = 1; i <= totalDayOfMonth; i++) {
    var oneDay = moment({ year :selectedYear, month :selectedMonth, day :i});
    days.push(oneDay);
  }

  return days;
}

CrammyApp.Functions.Calendar.addImputation = function (userId, imputationCode, oneMoment, imputationValue) {
  var cellImputation =  Imputations.findOne({user:userId,date:oneMoment.toISOString(),code : imputationCode});

  if (imputationValue == ""&&cellImputation) {
    //here for delete imputation as the event will only be fired if imputations wasn't empty previously
    Imputations.remove(cellImputation._id);
    return;
  }

  var number = parseFloat(imputationValue);//will clean strange imputs like 0.5sdfh -> 0.5

  number = inputationsFunctions.convertInput(number);

  if (cellImputation) {
    Imputations.update({_id:cellImputation._id}, {$set:{
      value : number
    }});
  }

  else {
    Imputations.insert({
      user : userId,
      code : imputationCode,
      date : oneMoment.toISOString(),
      value : number
    });
  }
}
