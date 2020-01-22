var testString = "chenrick@gmail.com";

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "blogger"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Users", function (err, resultUsers, fields) {
    if (err) throw err;
    console.log("total registered users are: " + resultUsers.length);
  });

  con.query("SELECT * FROM Users", function (err, resultUsers, fields) {
    if (err) throw err;
    for (var i=0; i < resultUsers.length; i++) {
      if (resultUsers[i].email === testString) {
        console.log("testString is in the db");
      }
    }
  });



  con.query("SELECT * FROM Posts", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
  });

});


