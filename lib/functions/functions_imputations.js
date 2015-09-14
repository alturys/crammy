CrammyApp.Functions.Imputations = {};

var mult = 20;

//Divide the by mult as we HAVE to manipulate Integer in DB and calculation
//So modulos will be ok, no strange rounding operations on floating numbers...
CrammyApp.Functions.Imputations.convertOutput = function (valueInDb) {
  return valueInDb/mult;
}

//Convert input value to integer -> Throw exception if input value is not dividable by mult
//For mult = 20 ->  Correct value = 1, 0.05, 0.5, 0.65
//              ->  Incorrect Value = 0.32,0.78 ...
CrammyApp.Functions.Imputations.convertInput = function (inputValue) {
  check(inputValue*mult, Match.Integer);//Throw exception
  return inputValue * mult;
}

//
CrammyApp.Functions.Imputations.checkCodeExist = function (codeParam) {
  var code = ImputationCode.findOne({code : codeParam});
  return code !== undefined;
}

//Check if total imputations for a day is superior to mult(1 full day imputation)
CrammyApp.Functions.Imputations.checkSum = function (sum) {
  return sum - mult;
}
