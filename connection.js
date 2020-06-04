var mysql = require("mysql");

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo_crud'
})

con.connect(function(err) {
    if(err) throw err;
})

module.exports = con;