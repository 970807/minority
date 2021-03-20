/* 
  封装数据库常用api
*/

const mysql = require('mysql')

exports.base = (sql, data) => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'minority'
    })

    connection.connect()

    connection.query(sql, data, (err, results) => {
      if (err) {
        console.log(err);
        return reject(err)
      }
      resolve(results)
    })

    connection.end()
  })
}