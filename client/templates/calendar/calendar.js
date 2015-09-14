Template.calendar.helpers({
  months: function(){
    var months = moment.months();
    var monthObjects = [];
    for (var i = 0; i < months.length; i++) {
      var o = {"index" : i , "label" : months[i]};
      monthObjects.push(o);
    }
    return monthObjects;
  }
});
