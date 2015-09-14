Template.month.helpers({
  log: function(){
    return this;
  }
});

Template.month.events({
  "click .crammy-month": function(e, t){
    Session.set("selectedMonth", this.index);
  }
});
