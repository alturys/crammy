Template.month.helpers({
  active : function () {
    var active = Session.get("selectedMonth");
    if (active === this.index) {
      return "active"
    }
  }
});

Template.month.events({
  "click .crammy-month": function(e, t){
    Session.set("selectedMonth", this.index);
  }
});
