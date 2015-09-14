CrammyApp.Functions.Calendar = {};

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
