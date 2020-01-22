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
    //console.log(resultUsers);
    console.log(resultUsers);
    console.log(resultUsers[0].email);
    //console.log(JSON.parse(resultUsers).email);
  });

  con.query("SELECT * FROM Posts", function (err, resultTitles, fields) {
    if (err) throw err;
    console.log(resultTitles);
    console.log(resultTitles[0].title);
  });

});

//console.log(resultUsers);
//console.log(resultTitles);

//if (resultTitles === resultUsers) {
//  console.log("allowed");
//} else {
//  console.log("not allowed");
// }

