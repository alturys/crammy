Template.supervisionDayHeader.helpers({
  dayOfMonth: function(){
    return this.format("DD");
  },
  dayOfWeek :function () {
    return this.format("dd");
  }
});
