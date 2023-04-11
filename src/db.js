const mysql2 =require('mysql2/promise')

async function connectDB() {
    
    const connection = await mysql2.createConnection({
        host: 'us-east.connect.psdb.cloud',
        user: 'fj6mim6d6r7e5fzcafdb',
        password: 'pscale_pw_iiagK11T37a7F7OVW6bJc5bDoYb9IeLhyDcAoAWUlYs',
        database: 'expreesdb',
        ssl: {
            rejectUnauthorized: false
        }
    
    })
    
    
    //consulta de mysql
    
    const result = await connection.query('SELECT 1 + 1 AS result')
    
    console.log(result);
}

module.exports = connectDB