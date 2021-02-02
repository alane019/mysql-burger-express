
var mysql = require('mysql');

var connection;

// if JAWSDB_URL process environment variable is detected (i.e., heroku is app environment)
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
// default connection type (i.e., localhost is app environment)
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        // note password used for test/example purposes only
        // environment variable can substitute viewable text password
        password: 'root',
        database: 'burgers_db'
    });
}
    // either type of connection will connect here and log error, if exists. 
    connection.connect((err) => {
        if (err) {
            console.error(err);
        }
            // if there are errors connecting in herko env, these might need to be removed;
            console.log(` user: ${connection.config.user}`);
            console.log(` connected to database: ${connection.config.database}`);
            console.log(`   port: ${connection.config.port}`);
            console.log(`   host: ${connection.config.host}`);  
            console.log("");
    }); 

    module.exports = connection;











