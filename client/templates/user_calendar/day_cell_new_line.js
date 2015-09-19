var inputationsFunctions = CrammyApp.Functions.Imputations;

Template.dayCellNewLine.events({
  "change .calendar-cell": function(e, t){
    event.preventDefault();
    console.log("NEW LINE USER");

    if (!inputationsFunctions.checkCodeExist(Session.get("newLineImputationCode"))) {
      alert("Code d'imputation inconnu");
      event.target.value = "";
      return;
    }

    var text = event.target.value||"";
    if (text == "") {
      //here for delete imputation as the event will only be fired if imputations wasn't empty previously
      console.log("IMPLEMENTS DELETE IMPUTATION");
      return;
    }

    var number = parseFloat(text);//will clean strange imputs like 0.5sdfh -> 0.5

    number = inputationsFunctions.convertInput(number);

    Imputations.insert({
      user : Meteor.userId(),
      code : Session.get("newLineImputationCode"),
      date : this.toISOString(),
      value : number
    });

    event.target.value = "";
  }
});
