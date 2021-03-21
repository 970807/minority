const db = require('../db')

module.exports = (req, res) => {
  if (req.method !== 'GET') return
  db.base('select * from newstitlelist').then(result => {
    res.json({
      code: '2000',
      msg: '请求成功',
      data: result
    })
  }).catch(() => {
    res.json({
      code: '400',
      msg: '未知错误',
      data: null
    })
  })
}