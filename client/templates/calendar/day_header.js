Template.dayHeader.helpers({
  dayOfMonth: function(){
    return this.format("DD");
  },
  dayOfWeek :function () {
    return this.format("dd");
  }
});
