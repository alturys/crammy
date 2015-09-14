var inputationsFunctions = CrammyApp.Functions.Imputations;
var cellImputation;

Template.dayCell.rendered = function () {
  console.log("CHECKING INPUTATIONS FOR " + this.data.toISOString());
  console.log(this);
  console.log(this.find(".calendarCell"));
  var daysImputations = Imputations.find({date:this.data.toISOString()}).fetch();
  var values = _.pluck(daysImputations,"value");
  var sum = _.reduce(values, function(memo, value){ return memo + value; }, 0);

  console.log(sum);
}

Template.dayCell.helpers({
//this is a moment object as we are in a template comming from a list of moments
  imputation: function(){
    var parent = Template.parentData(1);
    var imputation = _.findWhere(parent,{date:this.toISOString()});
    if (imputation) {
      cellImputation = imputation;//caching impuation to avoid further request for updates/deletes
      return inputationsFunctions.convertOutput(imputation.value);
    }
  },
  rendered : function () {
    console.log("CHECKING INPUTATIONS FOR " + this.toISOString());
    var daysImputations = Imputations.find({date:this.toISOString()}).fetch();
    var values = _.pluck(daysImputations,"value");
    var sum = _.reduce(values, function(memo, value){ return memo + value; }, 0);
    console.log(sum);
  }
});

Template.dayCell.events({
  "change .calendarCell": function(e, t){
    event.preventDefault();
    var text = event.target.value||"";
    if (text == "") {
      //here for delete imputation as the event will only be fired if imputations wasn't empty previously
      console.log("IMPLEMENTS DELETE IMPUTATION");
      console.log(cellImputation);
      Imputations.remove(cellImputation._id);
      return;
    }

    var number = parseFloat(text);//will clean strange imputs like 0.5sdfh -> 0.5

    number = inputationsFunctions.convertInput(number);

    Imputations.insert({
      user : Meteor.userId(),
      code : Template.parentData(1)[0].code,
      date : this.toISOString(),
      value : number
    });
  }
});
