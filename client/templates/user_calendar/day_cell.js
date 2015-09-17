//IMPORTS
var inputationsFunctions = CrammyApp.Functions.Imputations;

var status;

Template.dayCell.created = function () {
  this.state = new ReactiveDict();
  this.state.set("status", "");

  if (moment()< this.data) {
    this.state.set("status", "FUTURE");
  }
}


Template.dayCell.helpers({
//this is a moment object as we are in a template comming from a list of moments
  imputation: function(){
    var parent = Template.parentData(1);
    var imputation = _.findWhere(parent,{date:this.toISOString()});
    if (imputation) {
      return inputationsFunctions.convertOutput(imputation.value);
    }
  },
  status : function () {
    if (moment()< this) {
      return "";
    }
    var daysImputations = Imputations.find({user:Meteor.userId(),date:this.toISOString()}).fetch();
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
});

Template.dayCell.events({
  "change .calendar-cell": function(e, t){
    event.preventDefault();
    var text = event.target.value||"";
    var cellImputation =  Imputations.find({user:Meteor.userId(),date:this.toISOString(),code : Template.parentData(1)[0].code}).fetch()[0];
    if (text == ""&&cellImputation) {
      //here for delete imputation as the event will only be fired if imputations wasn't empty previously
      Imputations.remove(cellImputation._id);
      return;
    }

    var number = parseFloat(text);//will clean strange imputs like 0.5sdfh -> 0.5

    number = inputationsFunctions.convertInput(number);

    if (cellImputation) {
      Imputations.update({_id:cellImputation._id}, {$set:{
        value : number
      }});
    }

    else {
      Imputations.insert({
        user : Meteor.userId(),
        code : Template.parentData(1)[0].code,
        date : this.toISOString(),
        value : number
      });
    }
  }
});
