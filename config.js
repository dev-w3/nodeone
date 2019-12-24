const mysql = require('mysql');

module.exports = {
	sql : () => mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "rvtech",
	  database: "nodejs"
	}),
}