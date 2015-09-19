var inputationsFunctions = CrammyApp.Functions.Imputations;
var calendarFunctions = CrammyApp.Functions.Calendar;
var usersFunctions = CrammyApp.Functions.Users;

Template.supervisionDayCellNewLine.events({
  "change .calendar-cell": function(e, t){
    event.preventDefault();
    var imputationCode = Session.get("newSupervisionLineImputationCode");
    console.log("SUPERVISION IMPUT");
    console.log(imputationCode);

    if (!inputationsFunctions.checkCodeExist(imputationCode)) {
      alert("Code d'imputation inconnu");
      event.target.value = "";
      return;
    }

    var text = event.target.value||"";
    if (text == "") {
      return;
    }

    var userId = usersFunctions.getUserIdByTrigramme(Session.get("newSupervisionLineImputationUser"));
    var number = parseFloat(text);//will clean strange imputs like 0.5sdfh -> 0.5


    calendarFunctions.addImputation(userId, imputationCode, this, number);
    event.target.value = "";
  }
});
