const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

    connection.Connect((err) => {
        if (err) throw err;

            console.log(` user: ${connection.config.user}`);
            console.log(` connected to database: ${connection.config.database}`);
            console.log(`   port: ${connection.config.port}`);
            console.log(`   host: ${connection.config.host}`);  
    }); 

    module.exports = connection;  













