// Données préenregistrées
if (Imputations.find().count() === 0) {
  var now = new Date().getTime();

  // crée des utilisateurs utilisateurs
  var bsrId = Meteor.users.insert(
    { "_id" : "L9FoTbBYrYWnatkWP",
      "createdAt" : "2015-09-11T20:55:58.909Z",
      "services" : {
        "password" : {
          "bcrypt" : "$2a$10$f98jcVTjmH21UZ/BjOdcJuI6hQj78Q39MAC7GXbiar5hfrIgmP9MW" },
          "resume" : {
             "loginTokens" : [ { "when" : "2015-09-11T21:01:20.111Z", "hashedToken" : "O4m42SnD2RkgE5QVh90yFzSnmPWRMxzD7Zcg2PB0epc=" } ]
           }
         },
         "emails" : [ { "address" : "toto@gmail.com", "verified" : false } ],
        "profile" : {"name" : "Toto","trigramme":"TOT"  }
      });

  var bsr = Meteor.users.findOne(bsrId);

  ImputationCode.insert({
    code : "SQ-TM"
  });

  ImputationCode.insert({
    code : "SQ-TA"
  });

  ImputationCode.insert({
    code : "BnF-BC08"
  });

  ImputationCode.insert({
    code : "Asip-4"
  });

  Imputations.insert({
    user : bsr._id,
    code : "SQ-TM",
    date : moment({year:2015,month:0,day:15}).toISOString(),
    value : 10
  });

  Imputations.insert({
    user : bsr._id,
    code : "SQ-TA",
    date : moment({year:2015,month:0,day:15}).toISOString(),
    value : 10
  });

  Imputations.insert({
    user : bsr._id,
    code : "SQ-TM",
    date : moment({year:2015,month:0,day:16}).toISOString(),
    value : 20
  });

  Imputations.insert({
    user : bsr._id,
    code : "SQ-TM",
    date : moment({year:2015,month:0,day:31}).toISOString(),
    value : 20
  });

  Imputations.insert({
    user : bsr._id,
    code : "SQ-TM",
    date : moment({year:2015,month:1,day:1}).toISOString(),
    value : 20
  });

  Imputations.insert({
    user : bsr._id,
    code : "SQ-TM",
    date : moment({year:2015,month:7,day:1}).toISOString(),
    value : 20
  });
}
